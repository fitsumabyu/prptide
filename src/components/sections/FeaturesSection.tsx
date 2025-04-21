
import { Check, Shield, FileCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Check className="h-6 w-6 text-peptide-purple" />,
    title: "High Purity",
    description: "All peptides are rigorously tested to ensure ≥99% purity."
  },
  {
    icon: <Shield className="h-6 w-6 text-peptide-purple" />,
    title: "Quality Assurance",
    description: "Certificate of Analysis available for every product."
  },
  {
    icon: <FileCheck className="h-6 w-6 text-peptide-purple" />,
    title: "Research Focus",
    description: "Designed specifically for laboratory research applications."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-peptide-purple" />,
    title: "Scientific Advancement",
    description: "Supporting cutting-edge research in peptide science."
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Peptides</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality ensures that researchers receive the highest grade peptides for their laboratory studies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 p-2 inline-block bg-purple-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
