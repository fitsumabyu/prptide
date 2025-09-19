import OpenAI from "openai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Base product data - one image per base product (5 total)
const baseProducts = [
  { 
    baseId: "88815", 
    name: "Intensive Hydration Sheet Masks",
    description: "Single-use cosmetic biocellulose masks with ceramides"
  },
  { 
    baseId: "88816", 
    name: "Ultra-Hydrating Lip Masks",
    description: "Single-use cosmetic hydrogel lip patches"
  },
  { 
    baseId: "88817", 
    name: "Medical-grade Lanolin Lip Balm",
    description: "Anhydrous lanolin lip balm (cosmetic)"
  },
  { 
    baseId: "88818", 
    name: "Ceramide & Shea Butter Body Cream",
    description: "Rich, ceramide-containing body cream"
  },
  { 
    baseId: "88819", 
    name: "Metabolic Hydration Complex",
    description: "Electrolyte formula with non-stimulant cofactors"
  }
];

// Image descriptions for each base product
const imageDescriptions = {
  "88815": "Clean, minimalist product shot of single-use cosmetic biocellulose sheet mask. White background, professional lighting.",
  "88816": "Clean, minimalist product shot of single-use cosmetic hydrogel lip patch. White background, professional lighting",
  "88817": "Clean, lip balm and tube. White background, professional lighting.",
  "88818": "Clean, minimalist blob of shea butter body cream. White background, professional lighting, showing the jar packaging.",
  "88819": "Clean electrolyte powder. White background, professional lighting."
};

// Ensure the labimages directory exists
const outputDir = "./public/labimages";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Starting image generation for ${baseProducts.length} base products...`);

for (let i = 0; i < baseProducts.length; i++) {
  const product = baseProducts[i];
  const outputPath = path.join(outputDir, `${product.baseId}.png`);
  
  // Skip if image already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Skipping ${product.baseId} - image already exists`);
    continue;
  }
  
  // Get the image description for this base product
  const imageDescription = imageDescriptions[product.baseId];
  if (!imageDescription) {
    console.log(`⚠️  No image description found for ${product.baseId}, skipping...`);
    continue;
  }
  
  console.log(`🎨 Generating image ${i + 1}/${baseProducts.length}: ${product.name} (${product.baseId})`);
  
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
    console.log(`✅ Generated: ${product.baseId}.png`);
    
    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
    
  } catch (error) {
    console.error(`❌ Error generating image for ${product.baseId}:`, error.message);
    
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
