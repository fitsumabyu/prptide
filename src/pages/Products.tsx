
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ui/ProductCard";
import Disclaimer from "@/components/ui/Disclaimer";
import { products } from "@/data/products";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-96px)] flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Research Peptides</h1>
          <p className="text-gray-600 mb-6">
            Browse our selection of high-purity peptides for laboratory research applications.
            <span className="text-red-600 font-medium"> Not for human consumption.</span>
          </p>
          <div className="max-w-md mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-peptide-purple"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-8">
            <Disclaimer />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                purity={product.purity}
                price={product.price}
                image={product.image}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
