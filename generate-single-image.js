import OpenAI from "openai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Get the product ID from command line arguments
const productId = process.argv[2];

if (!productId) {
  console.error("Please provide a product ID as an argument");
  console.error("Usage: node generate-single-image.js <productId>");
  process.exit(1);
}

// Image descriptions for each product
const imageDescriptions = {
  // Metabolisk Integritetsprotokoll Kits
  "88815p1": "large matte white plastic canister, amber glass bottle with capsules, clear glass dropper bottle, solid white box containing stick-pack sachet",
  "88815p2": "large matte white canister, amber glass capsule bottle, sleek flat unlabeled box for sheet masks",
  "88815p3": "amber glass capsule bottle, clear glass dropper bottle, dark glass tincture bottle",
  "88815p4": "tray holding small single-use glass ampoules, large matte white canister",

  // Kroppskomposition Stack Kits
  "88816p1": "large matte white plastic canisters with screw-on lids, medium-sized amber glass bottle with black screw-on cap",
  "88816p2": "large matte white canister, white plastic handle with detachable clear-cased microneedling roller head",
  "88816p3": "amber glass capsule bottle, sleek unlabeled box for sheet masks",
  "88816p4": "dark glass tincture bottle, small unlabeled box for antioxidant sachets",

  // Tri-Faktor Metabolisk Protokoll Kits
  "88817p1": "large matte white canisters, amber glass capsule bottle, clear glass dropper bottle",
  "88817p2": "large matte white canister, amber glass capsule bottle, sleek unlabeled box for sheet masks",
  "88817p3": "amber glass capsule bottle, clear dropper bottle, dark glass tincture bottle",
  "88817p4": "tray holding small single-use glass ampoules, large matte white canister",

  // Dermal Ommodellering Matrix Kits
  "88818p1": "small clear glass bottle with white dropper cap showing blue-tinted liquid, amber glass capsule bottle, white plastic handle with detachable microneedling roller heads",
  "88818p2": "low-profile white plastic jar for thin exfoliating pads",
  "88818p3": "frosted glass bottle, unlabeled box for sheet masks",
  "88818p4": "tray holding small single-use glass ampoules, amber glass capsule bottle",

  // Systemisk Torrhetsprotokoll Kits
  "88819p1": "amber glass capsule bottles, heavy double-walled white plastic jar, white squeeze tube, small white eye-dropper bottle",
  "88819p2": "amber glass capsule bottle, large resealable bag for bath salts",
  "88819p3": "amber glass capsule bottle, small unlabeled box for lip masks",
  "88819p4": "small unlabeled box for hydration sachets, white jar"
};

// Ensure the labimages directory exists
const outputDir = "./public/labimages";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imageDescription = imageDescriptions[productId];
if (!imageDescription) {
  console.error(`No image description found for product ID: ${productId}`);
  process.exit(1);
}

const outputPath = path.join(outputDir, `${productId}.png`);

console.log(`🎨 Generating image for product: ${productId}`);
console.log(`📝 Description: ${imageDescription}`);

const fullPrompt = "Minimal, basic, white-label product photo: " + imageDescription;
console.log(`📝 Full prompt: ${fullPrompt}`);

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
  console.log(`✅ Generated: ${productId}.png`);
  
} catch (error) {
  console.error(`❌ Error generating image for ${productId}:`, error.message);
  process.exit(1);
}
