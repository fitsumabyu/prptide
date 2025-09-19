# Database Setup for Protidelab Products

This document describes the database setup for the Protidelab products system.

## Overview

The system now uses a PostgreSQL database (hosted on Neon) instead of static JSON data. The database contains:

- **Swedish Products**: Base compounds (Semaglutide, Tirzepatide, etc.) with their prices
- **Protidelab Products**: Support kits that correlate to Swedish products
- **Product Contents**: Individual ingredients/components of each kit
- **Product Details**: Storage instructions, COA links, etc.
- **Shipping Destinations**: Product-specific shipping information

## Database Schema

### SwedishProduct
- `id`: Product ID (e.g., "88815p1")
- `name`: Product name (e.g., "Semaglutide")
- `size`: Product size (e.g., "5mg")
- `price`: Price in SEK
- `compound`: Base compound name

### ProtidelabProduct
- `id`: Product ID (matches Swedish product ID)
- `name`: Product name
- `description`: English description
- `swedishdescription`: Swedish description
- `purity`: Quality level
- `image`: Image path
- `category`: Product category
- `correlatesto`: What it correlates to
- `imagedescription`: Image description
- `swedishProductId`: Foreign key to SwedishProduct

### ProductContent
- Individual ingredients/components of each kit
- English and Swedish names/descriptions
- Quantities and unit types

### ProductDetails
- Storage instructions
- COA links
- Product specifications

## Setup Instructions

1. **Environment Variables**: The database connection is configured via the `DATABASE_URL` environment variable.

2. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

3. **Push Schema to Database**:
   ```bash
   npx prisma db push
   ```

4. **Seed Database**:
   ```bash
   npx prisma db seed
   ```

5. **View Database** (optional):
   ```bash
   npx prisma studio
   ```

## Usage

### Using the Database Functions

```typescript
import { getProducts, getProductById, getProductsByCategory } from './src/data/protidelabproducts-db';

// Get all products
const products = await getProducts();

// Get single product
const product = await getProductById('88815p1');

// Get products by category
const metabolicProducts = await getProductsByCategory('Metabolisk Integritetsprotokoll');
```

### Using React Hooks

```typescript
import { useProducts, useProduct, useProductsByCategory } from './src/hooks/useProducts';

// In a React component
const { products, loading, error } = useProducts();
const { product } = useProduct('88815p1');
const { products: metabolicProducts } = useProductsByCategory('Metabolisk Integritetsprotokoll');
```

### API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products?id=88815p1` - Get single product
- `GET /api/products?category=Metabolisk%20Integritetsprotokoll` - Get products by category

## Current Data

The database is currently seeded with:

1. **20 Swedish Products**: All variants of Semaglutide, Tirzepatide, Retatrutide, GHK-Cu, and Roaccutan
2. **4 Protidelab Products**: 
   - Metabolisk Integritetsprotokoll - Fas I (88815p1)
   - Systemisk Torrhetsprotokoll - I (88819p1)
   - Systemisk Torrhetsprotokoll - II (88819p2)
   - Systemisk Torrhetsprotokoll - III (88819p3)

Each Protidelab product includes:
- Complete product information
- All contents/ingredients
- Product details (storage, COA links)
- Price inherited from corresponding Swedish product

## Migration from Static Data

The original `protidelabproducts.ts` file with static data is preserved. To migrate to the database:

1. Replace imports from `./src/data/protidelabproducts` with `./src/data/protidelabproducts-db`
2. Update components to use async functions or React hooks
3. Handle loading states appropriately

## Database Connection

The database is hosted on Neon PostgreSQL with the following connection details:
- Host: `ep-wispy-breeze-ad415e5y-pooler.c-2.us-east-1.aws.neon.tech`
- Database: `neondb`
- SSL: Required

Connection string: `postgresql://neondb_owner:npg_2Z5oauGcrbFn@ep-wispy-breeze-ad415e5y-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require`
