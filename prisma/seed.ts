import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // Clear existing data
  console.log('Clearing existing data...')
  await prisma.bundleItem.deleteMany()
  await prisma.productBundle.deleteMany()
  await prisma.individualProduct.deleteMany()
  await prisma.shippingDestination.deleteMany()

  // First, seed Swedish products (keeping for correlation)
  console.log('Seeding Swedish products...')
  const swedishProducts = [
    // Semaglutide variants
    { id: "88815p1", name: "Semaglutide", size: "5mg", price: 1500, compound: "semaglutide" },
    { id: "88815p2", name: "Semaglutide", size: "10mg", price: 2500, compound: "semaglutide" },
    { id: "88815p3", name: "Semaglutide", size: "20mg", price: 4500, compound: "semaglutide" },
    { id: "88815p4", name: "Semaglutide", size: "40mg", price: 8500, compound: "semaglutide" },
    // Tirzepatide variants
    { id: "88816p1", name: "Tirzepatide", size: "5mg", price: 699, compound: "tirzepatide" },
    { id: "88816p2", name: "Tirzepatide", size: "10mg", price: 1398, compound: "tirzepatide" },
    { id: "88816p3", name: "Tirzepatide", size: "20mg", price: 2796, compound: "tirzepatide" },
    { id: "88816p4", name: "Tirzepatide", size: "40mg", price: 5592, compound: "tirzepatide" },
    // Retatrutide variants
    { id: "88817p1", name: "Retatrutide", size: "4mg", price: 1000, compound: "retatrutide" },
    { id: "88817p2", name: "Retatrutide", size: "8mg", price: 1800, compound: "retatrutide" },
    { id: "88817p3", name: "Retatrutide", size: "20mg", price: 5000, compound: "retatrutide" },
    { id: "88817p4", name: "Retatrutide", size: "40mg", price: 9000, compound: "retatrutide" },
    // GHK-Cu variants
    { id: "88818p1", name: "GHK-Cu", size: "50mg", price: 600, compound: "ghk-cu" },
    { id: "88818p2", name: "GHK-Cu", size: "100mg", price: 1000, compound: "ghk-cu" },
    { id: "88818p3", name: "GHK-Cu", size: "200mg", price: 1900, compound: "ghk-cu" },
    { id: "88818p4", name: "GHK-Cu", size: "400mg", price: 3600, compound: "ghk-cu" },
    // Roaccutan variants
    { id: "88819p1", name: "Roaccutan", size: "1000mg", price: 700, compound: "isotretinoin" },
    { id: "88819p2", name: "Roaccutan", size: "2000mg", price: 1200, compound: "isotretinoin" },
    { id: "88819p3", name: "Roaccutan", size: "4000mg", price: 2000, compound: "isotretinoin" },
    { id: "88819p4", name: "Roaccutan", size: "8000mg", price: 3700, compound: "isotretinoin" }
  ]

  for (const product of swedishProducts) {
    await prisma.swedishProduct.upsert({
      where: { id: product.id },
      update: product,
      create: product,
    })
  }

  console.log('Swedish products seeded successfully!')

  // Create individual products
  console.log('Creating individual products...')
  const individualProducts = [
    // Main cosmetic products
    {
      id: "hydration-sheet-masks",
      name: "Intensive Hydration Sheet Masks",
      description: "Single-use cosmetic biocellulose masks with ceramides.",
      swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider.",
      category: "Cosmetic",
      unitType: "masks",
      swedishUnitType: "masker",
      image: "/labimages/88815.png",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/hydration-sheet-masks-coa.pdf"
    },
    {
      id: "lip-masks",
      name: "Ultra-Hydrating Lip Masks",
      description: "Single-use cosmetic hydrogel lip patches.",
      swedishdescription: "Engångs kosmetiska hydrogel läpplappar.",
      category: "Cosmetic",
      unitType: "masks",
      swedishUnitType: "masker",
      image: "/labimages/88816.png",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/lip-masks-coa.pdf"
    },
    {
      id: "lanolin-lip-balm",
      name: "Medical-grade Lanolin Lip Balm",
      description: "Anhydrous lanolin lip balm (cosmetic).",
      swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk).",
      category: "Cosmetic",
      unitType: "tubes",
      swedishUnitType: "tubar",
      image: "/labimages/88817.png",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/lanolin-lip-balm-coa.pdf"
    },
    {
      id: "body-cream",
      name: "Ceramide & Shea Butter Body Cream",
      description: "Rich, ceramide-containing body cream.",
      swedishdescription: "Rik, ceramid-innehållande kroppskräm.",
      category: "Cosmetic",
      unitType: "jars",
      swedishUnitType: "burkar",
      image: "/labimages/88818.png",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/body-cream-coa.pdf"
    },
    {
      id: "hydration-complex",
      name: "Metabolic Hydration Complex",
      description: "Electrolyte formula with non-stimulant cofactors. No performance claims.",
      swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer. Inga prestationspåståenden.",
      category: "Food supplement",
      unitType: "servings",
      swedishUnitType: "portioner",
      image: "/labimages/88819.png",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/hydration-complex-coa.pdf"
    },
    // Additional products for bundles
    {
      id: "herbal-gi-tea",
      name: "Herbal GI Soothing Tea Packs",
      description: "Soothing herbal tea blend with ginger, fennel, and chamomile.",
      swedishdescription: "Lugnande örttesblandning med ingefära, fänkål och kamomill.",
      category: "Tea",
      unitType: "packs",
      swedishUnitType: "paket",
      image: "/labimages/herbal-tea.png",
      storage: "Förvara torrt och svalt",
      coaLink: "/certificates/herbal-gi-tea-coa.pdf"
    },
    {
      id: "electrolyte-ginger-sticks",
      name: "Electrolyte + Ginger Stick Packs",
      description: "Enhanced electrolyte formula with ginger for digestive support.",
      swedishdescription: "Förbättrad elektrolytformel med ingefära för matsmältningsstöd.",
      category: "Food supplement",
      unitType: "packs",
      swedishUnitType: "paket",
      image: "/labimages/ginger-sticks.png",
      storage: "Förvara vid rumstemperatur, undvik fukt",
      coaLink: "/certificates/electrolyte-ginger-sticks-coa.pdf"
    }
  ]

  for (const product of individualProducts) {
    await prisma.individualProduct.create({ data: product })
  }

  console.log('Individual products created successfully!')

  // Create product bundles
  console.log('Creating product bundles...')
  
  // USA shipping destinations
  const usaStates = [
    { name: "California", description: "Available for personal use with proper documentation.", productSpecific: true },
    { name: "New York", description: "Personal use only with state verification.", productSpecific: true },
    { name: "Florida", description: "Limited availability for certified users.", productSpecific: true }
  ]

  // Bundle definitions
  const bundleDefinitions = [
    {
      baseId: "88815",
      name: "Intensive Hydration Sheet Masks",
      description: "Single-use cosmetic biocellulose masks with ceramides and complementary wellness support.",
      swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider och kompletterande välmåendestöd.",
      category: "Cosmetic",
      correlatesto: "Semaglutide",
      prices: [1500, 2500, 4500, 8500],
      mainProductId: "hydration-sheet-masks",
      mainQuantities: [12, 24, 36, 60], // Tier 4 bonus: 60 instead of 48 (5x Tier 1)
      // Add complementary products - scaled to match main product
      bundleItems: [
        { productId: "herbal-gi-tea", quantities: [12, 24, 36, 60] },
        { productId: "electrolyte-ginger-sticks", quantities: [12, 24, 36, 60] }
      ]
    },
    {
      baseId: "88816",
      name: "Ultra-Hydrating Lip Masks",
      description: "Single-use cosmetic hydrogel lip patches with complementary digestive support.",
      swedishdescription: "Engångs kosmetiska hydrogel läpplappar med kompletterande matsmältningsstöd.",
      category: "Cosmetic",
      correlatesto: "Tirzepatide",
      prices: [699, 1398, 2796, 5592],
      mainProductId: "lip-masks",
      mainQuantities: [10, 20, 30, 50], // Tier 4 bonus: 50 instead of 40 (5x Tier 1)
      // Add complementary products - scaled to match main product
      bundleItems: [
        { productId: "herbal-gi-tea", quantities: [10, 20, 30, 50] },
        { productId: "electrolyte-ginger-sticks", quantities: [10, 20, 30, 50] }
      ]
    },
    {
      baseId: "88817",
      name: "Medical-grade Lanolin Lip Balm",
      description: "Anhydrous lanolin lip balm (cosmetic) with soothing wellness support.",
      swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk) med lugnande välmåendestöd.",
      category: "Cosmetic",
      correlatesto: "Retatrutide",
      prices: [1000, 1800, 5000, 9000],
      mainProductId: "lanolin-lip-balm",
      mainQuantities: [1, 2, 3, 5], // Tier 4 bonus: 5 instead of 4 (5x Tier 1)
      // Add complementary products - proportional scaling
      bundleItems: [
        { productId: "herbal-gi-tea", quantities: [5, 10, 15, 25] }, // 5x scaling
        { productId: "electrolyte-ginger-sticks", quantities: [5, 10, 15, 25] } // 5x scaling
      ]
    },
    {
      baseId: "88818",
      name: "Ceramide & Shea Butter Body Cream",
      description: "Rich, ceramide-containing body cream with wellness enhancement.",
      swedishdescription: "Rik, ceramid-innehållande kroppskräm med välmåendeförstärkning.",
      category: "Cosmetic",
      correlatesto: "GHK-Cu",
      prices: [600, 1000, 1900, 3600],
      mainProductId: "body-cream",
      mainQuantities: [1, 2, 3, 5], // Tier 4 bonus: 5 instead of 4 (5x Tier 1)
      // Add complementary products - proportional scaling
      bundleItems: [
        { productId: "herbal-gi-tea", quantities: [7, 14, 21, 35] }, // 5x scaling
        { productId: "electrolyte-ginger-sticks", quantities: [7, 14, 21, 35] } // 5x scaling
      ]
    },
    {
      baseId: "88819",
      name: "Metabolic Hydration Complex",
      description: "Electrolyte formula with non-stimulant cofactors and additional digestive support. No performance claims.",
      swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer och ytterligare matsmältningsstöd. Inga prestationspåståenden.",
      category: "Food supplement",
      correlatesto: "Roaccutan",
      prices: [700, 1200, 2000, 3700],
      mainProductId: "hydration-complex",
      mainQuantities: [30, 60, 90, 150], // Tier 4 bonus: 150 instead of 120 (5x Tier 1)
      // Add complementary products - matching the serving quantities
      bundleItems: [
        { productId: "herbal-gi-tea", quantities: [30, 60, 90, 150] },
        { productId: "electrolyte-ginger-sticks", quantities: [30, 60, 90, 150] }
      ]
    }
  ]

  // Create bundles
  for (const bundleDef of bundleDefinitions) {
    for (let tier = 1; tier <= 4; tier++) {
      const bundleId = `${bundleDef.baseId}p${tier}`
      const swedishProductId = `${bundleDef.baseId}p${tier}`
      const tierIndex = tier - 1
      
      // Create the bundle
      const bundle = await prisma.productBundle.create({
        data: {
          id: bundleId,
          name: `${bundleDef.name} - Tier ${tier}`,
          description: bundleDef.description,
          swedishdescription: bundleDef.swedishdescription,
          purity: "Premium Kvalitet",
          price: bundleDef.prices[tierIndex],
          image: `/labimages/${bundleDef.baseId}.png`,
          category: bundleDef.category,
          correlatesto: `${bundleDef.correlatesto} ${tier === 1 ? '5mg' : tier === 2 ? '10mg' : tier === 3 ? '20mg' : '40mg'}`,
          imagedescription: `Product image for ${bundleDef.name} - Tier ${tier}`,
          tier: tier
        }
      })

      // Add main product to bundle
      await prisma.bundleItem.create({
        data: {
          bundleId: bundle.id,
          individualProductId: bundleDef.mainProductId,
          quantity: bundleDef.mainQuantities[tierIndex]
        }
      })

      // Add complementary products if defined
      if (bundleDef.bundleItems) {
        for (const bundleItem of bundleDef.bundleItems) {
          await prisma.bundleItem.create({
            data: {
              bundleId: bundle.id,
              individualProductId: bundleItem.productId,
              quantity: bundleItem.quantities[tierIndex]
            }
          })
        }
      }

      // Add shipping destinations
      for (const destination of usaStates) {
        await prisma.shippingDestination.create({
          data: {
            name: destination.name,
            description: destination.description,
            productSpecific: destination.productSpecific,
            bundleId: bundle.id
          }
        })
      }
    }
  }

  console.log('Product bundles created successfully!')
  console.log('Database seed completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
