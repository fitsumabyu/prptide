import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ui/ProductCard";
import Disclaimer from "@/components/ui/Disclaimer";
import { products } from "@/data/products";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeCategory === "all" || product.category === activeCategory)
    );
  }, [searchTerm, activeCategory]);

  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return ["all", ...uniqueCategories];
  }, []);

  // Group products by category
  const productsByCategory = useMemo(() => {
    if (activeCategory !== "all") {
      return {
        [activeCategory]: filteredProducts
      };
    }

    return filteredProducts.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {} as Record<string, typeof products>);
  }, [filteredProducts, activeCategory]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-96px)] flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Research Peptides</h1>
          <p className="text-gray-600 mb-6">
            Browse our selection of high-purity peptides for laboratory research applications.
            <span className="text-red-600 font-medium"> For Research Use Only - Not for Human Use.</span>
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="w-full md:w-1/3">
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
            
            <div className="w-full md:w-2/3">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-peptide-purple text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category === "all" ? "All Categories" : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-4 border border-amber-200 rounded-md mb-8">
            <h2 className="text-lg font-semibold text-amber-800 mb-2">Product Information Notice</h2>
            <p className="text-sm text-amber-700">
              All products listed on this page are for research purposes only. Each product displays its accurate name, 
              description, purity level, and price in USD. For detailed specifications and Certificate of Analysis, 
              please visit the individual product pages.
            </p>
          </div>

          <div className="mb-8">
            <Disclaimer />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          Object.entries(productsByCategory).map(([category, categoryProducts]) => (
            <div key={category} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    purity={product.purity}
                    price={product.price}
                    image={product.image}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
