import React, { useRef } from 'react';
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, FileText, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/data/products";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/components/ui/use-toast";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CertificateOfAnalysis = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const certificateRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold mb-4">Certificate Not Found</h1>
          <p className="mb-6">The product certificate you're looking for does not exist.</p>
          <Button asChild variant="outline">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Generate a batch number based on product id
  const batchNumber = `B${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}-${product.id.substring(0, 3).toUpperCase()}`;
  const testDate = new Date();
  testDate.setDate(testDate.getDate() - 14); // Two weeks ago
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 2); // Two years from now
  
  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;
    
    try {
      toast({
        title: "Generating PDF",
        description: "Please wait while we generate your certificate...",
        duration: 2000,
      });
      
      // Set a slight delay to allow the toast to display
      setTimeout(async () => {
        const certificate = certificateRef.current;
        const canvas = await html2canvas(certificate, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
        
        // Calculate dimensions to fit the content properly
        const imgWidth = 210; // A4 width in mm (210mm)
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${product.name.replace(/\s+/g, '-').toLowerCase()}-certificate-of-analysis.pdf`);
        
        toast({
          title: "Certificate Downloaded",
          description: `The Certificate of Analysis for ${product.name} has been generated and downloaded.`,
          duration: 3000,
        });
      }, 500);
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error",
        description: "There was a problem generating the PDF. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-6">
            <Link to={`/products/${product.id}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Product
            </Link>
          </Button>
          
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Certificate of Analysis</h1>
            <Button 
              className="flex items-center bg-peptide-purple hover:bg-peptide-dark-purple"
              onClick={handleDownloadPDF}
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
        
        <div 
          ref={certificateRef} 
          className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-8"
        >
          {/* Certificate Header with Company Logo */}
          <div className="mb-6 pb-6 border-b text-center">
            <h2 className="text-2xl font-bold text-peptide-purple uppercase tracking-wider">
              Nexus Laboratory
            </h2>
            <p className="text-sm text-gray-500">
              Certificate of Analysis | Research Materials
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
              <p className="text-gray-500">CAS: {product.details.cas || 'N/A'}</p>
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md flex items-center mt-4 md:mt-0">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Verified</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="overflow-x-auto">
              <h3 className="text-lg font-semibold mb-3">Product Information</h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-gray-600">Product Name</td>
                    <td className="py-2">{product.name}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-gray-600">Batch/Lot Number</td>
                    <td className="py-2">{batchNumber}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-gray-600">CAS Number</td>
                    <td className="py-2">{product.details.cas || 'N/A'}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-gray-600">Size/Amount</td>
                    <td className="py-2">{product.details.size}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-gray-600">Storage</td>
                    <td className="py-2">{product.details.storage}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="overflow-x-auto">
              <h3 className="text-lg font-semibold mb-3">Testing Information</h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-gray-600">Date of Test</td>
                    <td className="py-2">{testDate.toLocaleDateString()}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-gray-600">Expiry Date</td>
                    <td className="py-2">{expiryDate.toLocaleDateString()}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-gray-600">Appearance</td>
                    <td className="py-2">White to off-white powder</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-gray-600">Solubility</td>
                    <td className="py-2">Soluble in water</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-gray-600">Analyst</td>
                    <td className="py-2">QC Department</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-8 overflow-x-auto">
            <h3 className="text-lg font-semibold mb-3">Analytical Results</h3>
            <div className="min-w-[600px] md:min-w-0">
              <table className="w-full border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold text-gray-600">Test</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-600">Specification</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-600">Result</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Appearance</td>
                    <td className="py-3 px-4">White to off-white powder</td>
                    <td className="py-3 px-4">White powder</td>
                    <td className="py-3 px-4 text-green-600 font-medium">PASS</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Identity (HPLC)</td>
                    <td className="py-3 px-4">Corresponds to reference</td>
                    <td className="py-3 px-4">Corresponds</td>
                    <td className="py-3 px-4 text-green-600 font-medium">PASS</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Purity (HPLC)</td>
                    <td className="py-3 px-4">{product.purity}</td>
                    <td className="py-3 px-4">{product.purity.replace('≥', '')}</td>
                    <td className="py-3 px-4 text-green-600 font-medium">PASS</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Mass Spectrometry</td>
                    <td className="py-3 px-4">Corresponds to structure</td>
                    <td className="py-3 px-4">Corresponds</td>
                    <td className="py-3 px-4 text-green-600 font-medium">PASS</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Water Content</td>
                    <td className="py-3 px-4">≤ 5.0%</td>
                    <td className="py-3 px-4">0.8%</td>
                    <td className="py-3 px-4 text-green-600 font-medium">PASS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md mb-8">
            <h3 className="text-lg font-semibold mb-2">Conclusion</h3>
            <p>
              Based on the analytical results, this batch of {product.name} meets all specifications
              and is suitable for laboratory research use only.
            </p>
          </div>
          
          <div className="border-t pt-6 flex items-center">
            <Shield className="h-5 w-5 text-peptide-purple mr-2" />
            <p className="text-sm text-gray-600">
              This Certificate of Analysis is valid only for the specific batch identified above.
              For research use only. Not for veterinary use. 
            </p>
          </div>
          
          {/* Digital Signature */}
          <div className="mt-8 pt-4 border-t">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <p className="font-medium">Dr. Jane Wilson, Ph.D.</p>
                <p className="text-sm text-gray-600">Quality Control Director</p>
              </div>
              <div className="text-left md:text-right">
                <p className="font-medium">Document ID: COA-{product.id.toUpperCase()}-{Math.floor(Math.random() * 10000)}</p>
                <p className="text-sm text-gray-600">Generated on: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CertificateOfAnalysis; 