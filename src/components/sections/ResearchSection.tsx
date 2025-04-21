
const ResearchSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Advanced Research Applications</h2>
          <p className="text-lg text-gray-600">
            Our peptides are used in various laboratory research applications. Here are some common research areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-peptide-purple">Cell Signaling Studies</h3>
            <p className="text-gray-600">
              Investigate intercellular communication pathways and signal transduction mechanisms using our high-purity peptides.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-peptide-purple">Biochemical Assays</h3>
            <p className="text-gray-600">
              Conduct precise biochemical experiments with reliable peptide substrates and inhibitors.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-peptide-purple">Receptor Binding Analysis</h3>
            <p className="text-gray-600">
              Study receptor-ligand interactions and binding affinities in controlled laboratory settings.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-peptide-purple">Structural Biology</h3>
            <p className="text-gray-600">
              Explore peptide structures and their functional relationships in biological systems.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-peptide-purple">Enzyme Kinetics</h3>
            <p className="text-gray-600">
              Measure enzymatic activity and reaction rates using peptide substrates in controlled experiments.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-peptide-purple">Molecular Interactions</h3>
            <p className="text-gray-600">
              Investigate molecular dynamics and interaction mechanisms in complex biological systems.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-red-600 font-medium">
            All research applications are intended for laboratory use only. Not for diagnostic, therapeutic, or human use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
