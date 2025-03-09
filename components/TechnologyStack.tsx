import Image from 'next/image';

const TechnologyStack = () => {
  const techStack = [
    {
      icon: '/icons/eth.svg',
      title: 'Built on Ethereum, VARA & Layer-2 Solutions',
      description: ''
    },
    {
      icon: '/icons/dobi.svg',
      title: 'Backed with DOBI, our AI-Agent',
      description: ''
    },
    {
      icon: '/icons/blockchain.svg',
      title: 'Decentralized Marketplace & Participation Tokens',
      description: ''
    },
    {
      icon: '/icons/distribution.svg',
      title: 'Upgradeable Logic & Automated Profit Sharing',
      description: ''
    }
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Technology <span className="text-blue-600">Stack</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-md flex items-center h-32 ${index % 2 === 0 ? 'bg-blue-500' : 'bg-white'}`}
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-lg ${index % 2 === 0 ? 'bg-white' : 'bg-blue-500'} border ${index % 2 === 0 ? 'border-blue-500' : 'border-white'}`}>
                <Image src={tech.icon} alt={tech.title} width={30} height={30} />
              </div>
              <h3 className="text-lg font-semibold ${index % 2 === 0 ? 'text-white' : 'text-blue-600'}">
                {tech.title.split(', ').map((line, idx) => (
                  <span key={idx} className="block">{line}</span>
                ))}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack; 