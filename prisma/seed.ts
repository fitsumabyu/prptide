import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // Clear existing data
  console.log('Clearing existing data...')
  await prisma.bundleItem.deleteMany()
  await prisma.orderableProductBundle.deleteMany()
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
      swedishname: "Intensiva Hydreringsark Masker",
      description: "Single-use cosmetic biocellulose masks with ceramides.",
      swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider.",
      category: "Cosmetic",
      unitType: "masks",
      swedishUnitType: "masker",
      image: "/labimages/88815.png",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/hydration-sheet-masks-coa.pdf",
      productType: "subinventoryitem"
    },
    {
      id: "lip-masks",
      name: "Ultra-Hydrating Lip Masks",
      swedishname: "Ultra-Hydrerande Läppmasker",
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
      swedishname: "Medicinsk-kvalitet Lanolin Läppbalsam",
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
      swedishname: "Ceramid & Sheasmör Kroppskräm",
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
      swedishname: "Metabolisk Hydrerings Komplex",
      description: "Electrolyte formula with non-stimulant cofactors. No performance claims.",
      swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer. Inga prestationspåståenden.",
      category: "Food supplement",
      unitType: "servings",
      swedishUnitType: "portioner",
      image: "/labimages/88819.png",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/hydration-complex-coa.pdf"
    },
    // General complementary products for most bundles
    {
      id: "herbal-gi-tea",
      name: "Herbal GI Soothing Tea Packs",
      swedishname: "Örtbaserad GI Lugnande Te Paket",
      description: "Soothing herbal tea blend with ginger, fennel, and chamomile.",
      swedishdescription: "Lugnande örttesblandning med ingefära, fänkål och kamomill.",
      category: "Tea",
      unitType: "packs",
      swedishUnitType: "paket",
      image: "/labimages/herbal-tea.png",
      storage: "Förvara torrt och svalt",
      coaLink: "/certificates/herbal-gi-tea-coa.pdf",
      productType: "subinventoryitem"
    },
    {
      id: "electrolyte-ginger-sticks",
      name: "Electrolyte + Ginger Stick Packs",
      swedishname: "Elektrolyt + Ingefära Stick Paket",
      description: "Enhanced electrolyte formula with ginger for digestive support.",
      swedishdescription: "Förbättrad elektrolytformel med ingefära för matsmältningsstöd.",
      category: "Food supplement",
      unitType: "packs",
      swedishUnitType: "paket",
      image: "/labimages/ginger-sticks.png",
      storage: "Förvara vid rumstemperatur, undvik fukt",
      coaLink: "/certificates/electrolyte-ginger-sticks-coa.pdf",
      productType: "subinventoryitem"
    },
    // New enhanced sub-products specifically for Intensive Hydration Sheet Masks
    {
      id: "serum-ampoules",
      name: "Single-Use Serum Ampoules",
      swedishname: "Engångs Serumampuller",
      description: "HA 1% + niacinamide 5% + ceramide complex in premium glass vials (2 mL). Daily AM use, travel-safe.",
      swedishdescription: "HA 1% + niacinamid 5% + ceramidkomplex i premium glasflaskor (2 mL). Daglig AM-användning, resekompatibel.",
      category: "Cosmetic",
      unitType: "vials",
      swedishUnitType: "flaskor",
      image: "/labimages/serum-ampoules.png",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/serum-ampoules-coa.pdf",
      productType: "subinventoryitem"
    },
    {
      id: "night-repair-balm-pods",
      name: "Night Repair Balm Pods",
      swedishname: "Natt Reparation Balsam Kapslar",
      description: "Occlusive ceramide balm, fragrance-free in convenient pods (3-4g). Nightly seal over actives.",
      swedishdescription: "Ocklusiv ceramidbalsam, parfymfri i bekväma kapslar (3-4g). Nattlig försegling över aktiva ämnen.",
      category: "Cosmetic",
      unitType: "pods",
      swedishUnitType: "kapslar",
      image: "/labimages/night-balm-pods.png",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/night-repair-balm-pods-coa.pdf",
      productType: "subinventoryitem"
    },
    {
      id: "under-eye-patches",
      name: "Under-Eye Hydrogel Patches",
      swedishname: "Ögonområde Hydrogellappar",
      description: "Caffeine + peptide-free botanicals for under-eye care. Targeted hydration patches.",
      swedishdescription: "Koffein + peptidfria botanicals för ögonvård. Riktade hydreringslappar.",
      category: "Cosmetic",
      unitType: "pairs",
      swedishUnitType: "par",
      image: "/labimages/under-eye-patches.png",
      storage: "Förvara vid rumstemperatur, undvik direkt solljus",
      coaLink: "/certificates/under-eye-patches-coa.pdf",
      productType: "subinventoryitem"
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
      name: "Anti-Swell Facial Remedy",
      swedishname: "Anti-Svullnad Ansiktsbehandling",
      description: "Advanced facial treatment system with hydration masks, under-eye care, and serum enhancement.",
      swedishdescription: "Avancerat ansiktsbehandlingssystem med hydrateringsmasker, ögonvård och serumförstärkning.",
      category: "Cosmetic",
      correlatesto: "Semaglutide",
      prices: [1500, 2500, 4500, 8500],
      mainProductId: "hydration-sheet-masks",
      mainQuantities: [10, 20, 40, 80],
      bundleItems: [
        { productId: "under-eye-patches", quantities: [10, 20, 40, 80] },
        { productId: "serum-ampoules", quantities: [10, 20, 40, 80] }
      ]
    },
    {
      baseId: "88816",
      name: "Facial Hydro Focus",
      swedishname: "Ansikts Hydro Fokus",
      description: "Intensive lip hydration system with masks and overnight repair treatment.",
      swedishdescription: "Intensivt läpphydreringssystem med masker och nattlig reparationsbehandling.",
      category: "Cosmetic",
      correlatesto: "Tirzepatide",
      prices: [699, 1398, 2796, 5592],
      mainProductId: "lip-masks",
      mainQuantities: [10, 20, 40, 80],
      bundleItems: [
        { productId: "night-repair-balm-pods", quantities: [10, 20, 40, 80] }
      ]
    },
    {
      baseId: "88817",
      name: "Destressing Recovery",
      swedishname: "Avstressa Återhämtning",
      description: "Complete wellness recovery system with lip care, soothing tea, and digestive support.",
      swedishdescription: "Komplett välmående återhämtningssystem med läppvård, lugnande te och matsmältningsstöd.",
      category: "Cosmetic",
      correlatesto: "Retatrutide",
      prices: [1000, 1800, 5000, 9000],
      mainProductId: "lanolin-lip-balm",
      mainQuantities: [4, 8, 16, 32],
      bundleItems: [
        { productId: "herbal-gi-tea", quantities: [8, 16, 32, 64] },
        { productId: "electrolyte-ginger-sticks", quantities: [8, 16, 32, 64] }
      ]
    },
    {
      baseId: "88818",
      name: "Skin Revival Recovery",
      swedishname: "Hudförnyelse Återhämtning",
      description: "Premium body cream for comprehensive skin restoration and nourishment.",
      swedishdescription: "Premium kroppskräm för omfattande hudåterställning och näring.",
      category: "Cosmetic",
      correlatesto: "GHK-Cu",
      prices: [600, 1000, 1900, 3600],
      mainProductId: "body-cream",
      mainQuantities: [2, 4, 8, 16],
      bundleItems: []
    },
    {
      baseId: "88819",
      name: "Electrolyte Salt GI Biome Complex",
      swedishname: "Elektrolyt Salt GI Biom Komplex",
      description: "Advanced electrolyte and digestive support formula for optimal hydration and gut health.",
      swedishdescription: "Avancerad elektrolyt- och matsmältningsstödformel för optimal hydrering och tarmhälsa.",
      category: "Food supplement",
      correlatesto: "Roaccutan",
      prices: [700, 1200, 2000, 3700],
      mainProductId: "hydration-complex",
      mainQuantities: [3, 6, 12, 24],
      bundleItems: []
    }
  ]

  // Create bundles
  for (const bundleDef of bundleDefinitions) {
    for (let tier = 1; tier <= 4; tier++) {
      const bundleId = `${bundleDef.baseId}p${tier}`
      const swedishProductId = `${bundleDef.baseId}p${tier}`
      const tierIndex = tier - 1
      
      // Create the bundle
      const bundle = await prisma.orderableProductBundle.create({
        data: {
          id: bundleId,
          name: `${bundleDef.name} ${tier}`,
          swedishname: `${bundleDef.swedishname} ${tier}`,
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
