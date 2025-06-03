import Layout from "@/components/layout/Layout";
import Disclaimer from "@/components/ui/Disclaimer";
import { Building, MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About FormulaX</h1>
          
          {/* Business Identity Section */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2 text-peptide-purple" />
              Business Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Official Business Name</p>
                <p className="font-medium mb-4">FormulaX, LLC (88888888, Inc)</p>
                
                <p className="text-sm text-gray-500 mb-1">DBA</p>
                <p className="font-medium mb-4">FormulaX</p>
                
                <p className="text-sm text-gray-500 mb-1">Business Registration</p>
                <p className="font-medium">Company Number: LLC-78291045</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1 flex items-start">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400 mt-0.5 flex-shrink-0" /> Registered Address
                </p>
                <p className="font-medium mb-4">
                  131 Continental, Dr Suite 305<br />
                  Newark, DE 19713<br />
                  United States
                </p>
                
                <p className="text-sm text-gray-500 mb-1 flex items-center">
                  <Phone className="h-4 w-4 mr-1 text-gray-400" /> Phone
                </p>
                <p className="font-medium mb-4">+1 (708) 734-6847
                </p>
                
                <p className="text-sm text-gray-500 mb-1 flex items-center">
                  <Mail className="h-4 w-4 mr-1 text-gray-400" /> Email
                </p>
                <p className="font-medium">support@protidelab.com</p>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              FormulaX is a leading provider of high-quality laboratory reagents designed exclusively for laboratory use. 
              Our mission is to support scientific advancement by providing researchers with premium-grade chemical reference materials for their experimental work.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment to Quality</h2>
            <p className="text-gray-700 mb-6">
              At FormulaX, we are committed to delivering the highest quality academic research supplies available. Our rigorous quality control process ensures that every chemical reference material meets strict purity standards before reaching your laboratory.
            </p>
            <p className="text-gray-700 mb-6">
              Each product undergoes comprehensive testing and is accompanied by a detailed Certificate of Analysis (COA) that verifies its identity, purity, and composition. This commitment to quality helps researchers achieve reliable, reproducible results in their studies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Research Focus</h2>
            <p className="text-gray-700 mb-6">
              We specialize in providing laboratory reagents for a wide range of research applications, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Biochemical and cell-based assays</li>
              <li>Receptor binding studies</li>
              <li>Signaling pathway investigations</li>
              <li>Structure-activity relationship analyses</li>
              <li>Enzyme kinetics research</li>
              <li>Molecular and cellular biology experiments</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Standards</h2>
            <p className="text-gray-700 mb-6">
              FormulaX adheres to the following standards:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Minimum 98% purity for all chemical reference materials</li>
              <li>Rigorous quality testing and verification</li>
              <li>Secure, temperature-controlled storage and shipping</li>
              <li>Comprehensive documentation and COAs</li>
              <li>Strict compliance with all relevant regulations</li>
            </ul>
            
            <Disclaimer />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about our products or would like to discuss your research needs, please don't hesitate to <a href="/contact" className="text-peptide-purple hover:underline">contact us</a>. Our team of scientific experts is available to provide technical assistance and support for your laboratory research.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
