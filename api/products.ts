import { NextApiRequest, NextApiResponse } from 'next';
import { getProducts, getProductById, getProductsByCategory } from '../src/data/protidelabproducts-db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { id, category } = req.query;

      if (id && typeof id === 'string') {
        // Get single product by ID
        const product = await getProductById(id);
        if (product) {
          res.status(200).json(product);
        } else {
          res.status(404).json({ error: 'Product not found' });
        }
      } else if (category && typeof category === 'string') {
        // Get products by category
        const products = await getProductsByCategory(category);
        res.status(200).json(products);
      } else {
        // Get all products
        const products = await getProducts();
        res.status(200).json(products);
      }
    } catch (error) {
      console.error('Error in products API:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
