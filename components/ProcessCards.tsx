const ProcessCards = () => {
  const cards = [
    {
      title: 'DOBI AI Agent',
      description: 'Our agent tackles uncertainty in accounting data with Fuzzy AI, generating Zero-Knowledge Proofs (ZKP) for privacy and data integrity.'
    },
    {
      title: 'Automated distribution system',
      description: 'Turning everyday machines into Decentralized Autonomous Machines (DAMs) that anyone can invest in.'
    },
    {
      title: 'Collateral as guarantee',
      description: 'Your investment is backed to deliver greater and more secure benefits compared to other investments.'
    },
    {
      title: 'A new economic model',
      description: 'Consumers become owners, expenses become investments, and wealth creation is truly democratized.'
    }
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Invest in tokenized assets backed by AI agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-gradient-to-b from-blue-200 to-blue-500 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-white mb-4">{card.title}</h3>
              <p className="text-white">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessCards; 