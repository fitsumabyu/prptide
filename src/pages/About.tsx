
import Layout from "@/components/layout/Layout";
import Disclaimer from "@/components/ui/Disclaimer";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Peptide Lab Nexus</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Peptide Lab Nexus is a leading provider of high-quality research peptides designed exclusively for laboratory use. 
              Our mission is to support scientific advancement by providing researchers with premium-grade peptides for their experimental work.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment to Quality</h2>
            <p className="text-gray-700 mb-6">
              At Peptide Lab Nexus, we are committed to delivering the highest quality research peptides available. Our rigorous quality control process ensures that every peptide meets strict purity standards before reaching your laboratory.
            </p>
            <p className="text-gray-700 mb-6">
              Each product undergoes comprehensive testing and is accompanied by a detailed Certificate of Analysis (COA) that verifies its identity, purity, and composition. This commitment to quality helps researchers achieve reliable, reproducible results in their studies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Research Focus</h2>
            <p className="text-gray-700 mb-6">
              We specialize in providing peptides for a wide range of research applications, including:
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
              Peptide Lab Nexus adheres to the following standards:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Minimum 98% purity for all peptides</li>
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
