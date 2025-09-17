import OpenAI from "openai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Product data extracted from protidelabproducts.ts
const products = [
  // Metabolisk Integritetsprotokoll Kits
  { id: "88815p1", name: "Metabolisk Integritetsprotokoll - Fas I" },
  { id: "88815p2", name: "Metabolisk Integritetsprotokoll - Fas II" },
  { id: "88815p3", name: "Metabolisk Integritetsprotokoll - Fas III" },
  { id: "88815p4", name: "Metabolisk Integritetsprotokoll - Apex" },
  
  // Kroppskomposition Stack Kits
  { id: "88816p1", name: "Kroppskomposition Stack - Grundläggande" },
  { id: "88816p2", name: "Kroppskomposition Stack - Accelerator" },
  { id: "88816p3", name: "Kroppskomposition Stack - Avancerad" },
  { id: "88816p4", name: "Kroppskomposition Stack - Apex" },
  
  // Tri-Faktor Metabolisk Protokoll Kits
  { id: "88817p1", name: "Tri-Faktor Metabolisk Protokoll - I" },
  { id: "88817p2", name: "Tri-Faktor Metabolisk Protokoll - II" },
  { id: "88817p3", name: "Tri-Faktor Metabolisk Protokoll - III" },
  { id: "88817p4", name: "Tri-Faktor Metabolisk Protokoll - Apex" },
  
  // Dermal Ommodellering Matrix Kits
  { id: "88818p1", name: "Dermal Ommodellering Matrix - Grundläggande" },
  { id: "88818p2", name: "Dermal Ommodellering Matrix - Accelerator" },
  { id: "88818p3", name: "Dermal Ommodellering Matrix - Avancerad" },
  { id: "88818p4", name: "Dermal Ommodellering Matrix - Apex" },
  
  // Systemisk Torrhetsprotokoll Kits
  { id: "88819p1", name: "Systemisk Torrhetsprotokoll - I" },
  { id: "88819p2", name: "Systemisk Torrhetsprotokoll - II" },
  { id: "88819p3", name: "Systemisk Torrhetsprotokoll - III" },
  { id: "88819p4", name: "Systemisk Torrhetsprotokoll - Apex" }
];

// Image descriptions for each product - showing only items specific to that tier
const imageDescriptions = {
  // Metabolisk Integritetsprotokoll Kits - Phase I items only
  "88815p1": "large matte white plastic canister, amber glass bottle with capsules, clear glass dropper bottle, solid white box containing stick-pack sachet",
  
  // Metabolisk Integritetsprotokoll Kits - Phase II additional items only
  "88815p2": "large matte white canister, amber glass capsule bottle, sleek flat unlabeled box for sheet masks",
  
  // Metabolisk Integritetsprotokoll Kits - Phase III additional items only
  "88815p3": "amber glass capsule bottle, clear glass dropper bottle, dark glass tincture bottle",
  
  // Metabolisk Integritetsprotokoll Kits - Apex additional items only
  "88815p4": "tray holding small single-use glass ampoules, large matte white canister",

  // Kroppskomposition Stack Kits - Foundation items only
  "88816p1": "large matte white plastic canisters with screw-on lids, medium-sized amber glass bottle with black screw-on cap",
  
  // Kroppskomposition Stack Kits - Accelerator additional items only
  "88816p2": "large matte white canister, white plastic handle with detachable clear-cased microneedling roller head",
  
  // Kroppskomposition Stack Kits - Advanced additional items only
  "88816p3": "amber glass capsule bottle, sleek unlabeled box for sheet masks",
  
  // Kroppskomposition Stack Kits - Apex additional items only
  "88816p4": "dark glass tincture bottle, small unlabeled box for antioxidant sachets",

  // Tri-Faktor Metabolisk Protokoll Kits - Level I items only
  "88817p1": "large matte white canisters, amber glass capsule bottle, clear glass dropper bottle",
  
  // Tri-Faktor Metabolisk Protokoll Kits - Level II additional items only
  "88817p2": "large matte white canister, amber glass capsule bottle, sleek unlabeled box for sheet masks",
  
  // Tri-Faktor Metabolisk Protokoll Kits - Level III additional items only
  "88817p3": "amber glass capsule bottle, clear dropper bottle, dark glass tincture bottle",
  
  // Tri-Faktor Metabolisk Protokoll Kits - Apex additional items only
  "88817p4": "tray holding small single-use glass ampoules, large matte white canister",

  // Dermal Ommodellering Matrix Kits - Foundation items only
  "88818p1": "small clear glass bottle with white dropper cap showing blue-tinted liquid, amber glass capsule bottle, white plastic handle with detachable microneedling roller heads",
  
  // Dermal Ommodellering Matrix Kits - Accelerator additional items only
  "88818p2": "low-profile white plastic jar for thin exfoliating pads",
  
  // Dermal Ommodellering Matrix Kits - Advanced additional items only
  "88818p3": "frosted glass bottle, unlabeled box for sheet masks",
  
  // Dermal Ommodellering Matrix Kits - Apex additional items only
  "88818p4": "tray holding small single-use glass ampoules, amber glass capsule bottle",

  // Systemisk Torrhetsprotokoll Kits - Protocol I items only
  "88819p1": "amber glass capsule bottles, heavy double-walled white plastic jar, white squeeze tube, small white eye-dropper bottle",
  
  // Systemisk Torrhetsprotokoll Kits - Protocol II additional items only
  "88819p2": "amber glass capsule bottle, large resealable bag for bath salts",
  
  // Systemisk Torrhetsprotokoll Kits - Protocol III additional items only
  "88819p3": "amber glass capsule bottle, small unlabeled box for lip masks",
  
  // Systemisk Torrhetsprotokoll Kits - Apex additional items only
  "88819p4": "small unlabeled box for hydration sachets, white jar"
};

// Ensure the labimages directory exists
const outputDir = "./public/labimages";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Starting image generation for ${products.length} products...`);

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const outputPath = path.join(outputDir, `${product.id}.png`);
  
  // Skip if image already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Skipping ${product.id} - image already exists`);
    continue;
  }
  
  // Get the image description for this product
  const imageDescription = imageDescriptions[product.id];
  if (!imageDescription) {
    console.log(`⚠️  No image description found for ${product.id}, skipping...`);
    continue;
  }
  
  console.log(`🎨 Generating image ${i + 1}/${products.length}: ${product.name} (${product.id})`);
  
  const fullPrompt = "Minimal, basic, white-label product photo: " + imageDescription;
  console.log(`📝 Prompt: ${fullPrompt}`);
  
  try {
    const result = await openai.images.generate({
      model: "dall-e-3",
      prompt: fullPrompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    // Download the image
    const imageUrl = result.data[0].url;
    const imageResponse = await fetch(imageUrl);
    const imageBuffer = await imageResponse.arrayBuffer();
    
    // Save the image
    fs.writeFileSync(outputPath, Buffer.from(imageBuffer));
    console.log(`✅ Generated: ${product.id}.png`);
    
    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
    
  } catch (error) {
    console.error(`❌ Error generating image for ${product.id}:`, error.message);
    
    // If it's a rate limit error, wait longer
    if (error.message.includes('rate limit') || error.message.includes('quota')) {
      console.log("⏳ Rate limit hit, waiting 60 seconds...");
      await new Promise(resolve => setTimeout(resolve, 60000));
      // Retry the same product
      i--;
    }
  }
}

console.log("🎉 Image generation complete!");
