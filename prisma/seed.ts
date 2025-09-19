import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // First, seed Swedish products
  console.log('Seeding Swedish products...')
  const swedishProducts = [
    // Semaglutide variants - Base ID: 88815
    {
      id: "88815p1",
      name: "Semaglutide",
      size: "5mg",
      price: 1500,
      compound: "semaglutide"
    },
    {
      id: "88815p2",
      name: "Semaglutide",
      size: "10mg",
      price: 2500,
      compound: "semaglutide"
    },
    {
      id: "88815p3",
      name: "Semaglutide",
      size: "20mg",
      price: 4500,
      compound: "semaglutide"
    },
    {
      id: "88815p4",
      name: "Semaglutide",
      size: "40mg",
      price: 8500,
      compound: "semaglutide"
    },
    
    // Tirzepatide variants - Base ID: 88816
    {
      id: "88816p1",
      name: "Tirzepatide",
      size: "5mg",
      price: 699,
      compound: "tirzepatide"
    },
    {
      id: "88816p2",
      name: "Tirzepatide",
      size: "10mg",
      price: 1398,
      compound: "tirzepatide"
    },
    {
      id: "88816p3",
      name: "Tirzepatide",
      size: "20mg",
      price: 2796,
      compound: "tirzepatide"
    },
    {
      id: "88816p4",
      name: "Tirzepatide",
      size: "40mg",
      price: 5592,
      compound: "tirzepatide"
    },
    
    // Retatrutide variants - Base ID: 88817
    {
      id: "88817p1",
      name: "Retatrutide",
      size: "4mg",
      price: 1000,
      compound: "retatrutide"
    },
    {
      id: "88817p2",
      name: "Retatrutide",
      size: "8mg",
      price: 1800,
      compound: "retatrutide"
    },
    {
      id: "88817p3",
      name: "Retatrutide",
      size: "20mg",
      price: 5000,
      compound: "retatrutide"
    },
    {
      id: "88817p4",
      name: "Retatrutide",
      size: "40mg",
      price: 9000,
      compound: "retatrutide"
    },
    
    // GHK-Cu variants - Base ID: 88818
    {
      id: "88818p1",
      name: "GHK-Cu",
      size: "50mg",
      price: 600,
      compound: "ghk-cu"
    },
    {
      id: "88818p2",
      name: "GHK-Cu",
      size: "100mg",
      price: 1000,
      compound: "ghk-cu"
    },
    {
      id: "88818p3",
      name: "GHK-Cu",
      size: "200mg",
      price: 1900,
      compound: "ghk-cu"
    },
    {
      id: "88818p4",
      name: "GHK-Cu",
      size: "400mg",
      price: 3600,
      compound: "ghk-cu"
    },
    
    // Roaccutan (Isotretinoin) variants - Base ID: 88819
    {
      id: "88819p1",
      name: "Roaccutan",
      size: "1000mg",
      price: 700,
      compound: "isotretinoin"
    },
    {
      id: "88819p2",
      name: "Roaccutan",
      size: "2000mg",
      price: 1200,
      compound: "isotretinoin"
    },
    {
      id: "88819p3",
      name: "Roaccutan",
      size: "4000mg",
      price: 2000,
      compound: "isotretinoin"
    },
    {
      id: "88819p4",
      name: "Roaccutan",
      size: "8000mg",
      price: 3700,
      compound: "isotretinoin"
    }
  ]

  for (const product of swedishProducts) {
    await prisma.swedishProduct.upsert({
      where: { id: product.id },
      update: product,
      create: product,
    })
  }

  console.log('Swedish products seeded successfully!')

  // Now seed the 5 products in 4 quantity tiers each (20 total products)
  console.log('Seeding Protidelab products...')

  // Define the 5 base products with their 4 quantity tiers
  const productDefinitions = [
    {
      baseId: "88815",
      name: "Intensive Hydration Sheet Masks",
      description: "Single-use cosmetic biocellulose masks with ceramides.",
      swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider.",
      category: "Cosmetic",
      correlatesto: "Semaglutide",
      swedishProductIds: ["88815p1", "88815p2", "88815p3", "88815p4"],
      quantities: [12, 24, 36, 48], // masks
      unitTypes: ["masks", "masker"],
      contents: [
        {
          englishname: "Intensive Hydration Sheet Masks",
          swedishname: "Intensiva Hydrering Ansiktsmasker",
          englishdescription: "Single-use cosmetic biocellulose masks with ceramides",
          swedishdescription: "Engångs kosmetiska biocellulosa masker med ceramider"
        }
      ]
    },
    {
      baseId: "88816",
      name: "Ultra-Hydrating Lip Masks",
      description: "Single-use cosmetic hydrogel lip patches.",
      swedishdescription: "Engångs kosmetiska hydrogel läpplappar.",
      category: "Cosmetic",
      correlatesto: "Tirzepatide",
      swedishProductIds: ["88816p1", "88816p2", "88816p3", "88816p4"],
      quantities: [10, 20, 30, 40], // lip masks
      unitTypes: ["masks", "masker"],
      contents: [
        {
          englishname: "Ultra-Hydrating Lip Masks",
          swedishname: "Ultra-Hydrerande Läppmasker",
          englishdescription: "Single-use cosmetic hydrogel lip patches",
          swedishdescription: "Engångs kosmetiska hydrogel läpplappar"
        }
      ]
    },
    {
      baseId: "88817",
      name: "Medical-grade Lanolin Lip Balm",
      description: "Anhydrous lanolin lip balm (cosmetic).",
      swedishdescription: "Vattenfri lanolin läppbalsam (kosmetisk).",
      category: "Cosmetic",
      correlatesto: "Retatrutide",
      swedishProductIds: ["88817p1", "88817p2", "88817p3", "88817p4"],
      quantities: [1, 2, 3, 4], // tubes
      unitTypes: ["tubes", "tubar"],
      contents: [
        {
          englishname: "Medical-grade Lanolin Lip Balm",
          swedishname: "Medicinsk Lanolin Läppbalsam",
          englishdescription: "Anhydrous lanolin lip balm in a tube",
          swedishdescription: "Vattenfri lanolin läppbalsam i en tub"
        }
      ]
    },
    {
      baseId: "88818",
      name: "Ceramide & Shea Butter Body Cream",
      description: "Rich, ceramide-containing body cream.",
      swedishdescription: "Rik, ceramid-innehållande kroppskräm.",
      category: "Cosmetic",
      correlatesto: "GHK-Cu",
      swedishProductIds: ["88818p1", "88818p2", "88818p3", "88818p4"],
      quantities: [1, 2, 3, 4], // jars
      unitTypes: ["jars", "burkar"],
      contents: [
        {
          englishname: "Ceramide & Shea Butter Body Cream",
          swedishname: "Ceramid & Sheasmör Kroppskräm",
          englishdescription: "Rich, ceramide-containing body cream in a jar",
          swedishdescription: "Rik, ceramid-innehållande kroppskräm i en burk"
        }
      ]
    },
    {
      baseId: "88819",
      name: "Metabolic Hydration Complex",
      description: "Electrolyte formula with non-stimulant cofactors. No performance claims.",
      swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer. Inga prestationspåståenden.",
      category: "Food supplement",
      correlatesto: "Roaccutan",
      swedishProductIds: ["88819p1", "88819p2", "88819p3", "88819p4"],
      quantities: [30, 60, 90, 120], // servings
      unitTypes: ["servings", "portioner"],
      contents: [
        {
          englishname: "Metabolic Hydration Complex",
          swedishname: "Metaboliskt Hydreringskomplex",
          englishdescription: "Electrolyte formula with non-stimulant cofactors",
          swedishdescription: "Elektrolytformel med icke-stimulerande kofaktorer"
        }
      ]
    }
  ]

  // Create all 20 products (5 base products × 4 quantity tiers)
  for (const productDef of productDefinitions) {
    for (let i = 0; i < 4; i++) {
      const productId = `${productDef.baseId}p${i + 1}`
      const swedishProductId = productDef.swedishProductIds[i]
      const quantity = productDef.quantities[i]
      
      // Create the Protidelab product
      await prisma.protidelabProduct.upsert({
        where: { id: productId },
        update: {},
        create: {
          id: productId,
          name: `${productDef.name} - Tier ${i + 1}`,
          description: productDef.description,
          swedishdescription: productDef.swedishdescription,
          purity: "Premium Kvalitet",
          image: `/labimages/${productId}.png`,
          category: productDef.category,
          correlatesto: `${productDef.correlatesto} ${swedishProductId.split('p')[1] === '1' ? '5mg' : swedishProductId.split('p')[1] === '2' ? '10mg' : swedishProductId.split('p')[1] === '3' ? '20mg' : '40mg'}`,
          imagedescription: `Product image for ${productDef.name} - Tier ${i + 1}`,
          swedishProductId: swedishProductId,
        }
      })

      // Add contents for the product (delete existing first)
      await prisma.productContent.deleteMany({
        where: { protidelabProductId: productId }
      })
      
      for (const content of productDef.contents) {
        await prisma.productContent.create({
          data: {
            englishname: content.englishname,
            swedishname: content.swedishname,
            englishdescription: content.englishdescription,
            swedishdescription: content.swedishdescription,
            quantity: quantity,
            englishunittype: productDef.unitTypes[0],
            swedishunittype: productDef.unitTypes[1],
            protidelabProductId: productId
          }
        })
      }

      // Add details for the product (upsert to handle existing)
      await prisma.productDetails.upsert({
        where: { protidelabProductId: productId },
        update: {
          productId: productId,
          size: `${quantity} ${productDef.unitTypes[0]}`,
          storage: "Förvara vid rumstemperatur, undvik direkt solljus",
          coaLink: `/certificates/${productId}-coa.pdf`
        },
        create: {
          productId: productId,
          size: `${quantity} ${productDef.unitTypes[0]}`,
          storage: "Förvara vid rumstemperatur, undvik direkt solljus",
          coaLink: `/certificates/${productId}-coa.pdf`,
          protidelabProductId: productId
        }
      })
    }
  }

  console.log('Protidelab products seeded successfully!')
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
