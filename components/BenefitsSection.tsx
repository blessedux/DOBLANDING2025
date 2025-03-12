import Image from 'next/image';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '/icons/Hug.svg',
      title: 'For Institutional Investors',
      points: [
        'Complete Automation of Asset Flows.',
        'Flexibility in Leasing and RWA Models.',
        'Decentralization and Transparency in Revenue Distribution.',
        'Global Expansion with a Focus on Latin America'
      ]
    },
    {
      icon: '/icons/Investor.svg',
      title: 'For Crypto Investors',
      points: [
        'Variety of companies in which to invest.',
        'Both companies and small investors can earn passive incomes.',
        'A simple platform where Real World Assets are accessible, efficient and sustainable.'
      ]
    }
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4 text-left">
                <Image src={benefit.icon} alt={benefit.title} width={50} height={50} className="mr-4" />
                <h3 className="text-lg font-semibold text-blue-600">{benefit.title}</h3>
              </div>
              <ul className="text-blue-600 text-left">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="mb-2">• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 