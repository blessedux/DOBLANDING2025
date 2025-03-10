import Image from 'next/image';

const RealWorldApplication = () => {
  const applications = [
    {
      icon: '/icons/ev-charger.svg',
      title: 'EV-Charger',
      description: 'EV chargers are equipped with TEEs with tamper-proof data integrity.'
    },
    {
      icon: '/icons/data-oversee.svg',
      title: 'Data Oversight',
      description: 'DOBI will oversee data generated by EV charging station.'
    },
    {
      icon: '/icons/funds-distribution.svg',
      title: 'Funds Distribution',
      description: 'Funds are transparently and automatically distributed to token holders.'
    }
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Real world application <span className="text-blue-600">EV-Charger</span></h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <Image src={app.icon} alt={app.title} width={50} height={50} className="mb-4" />
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{app.title}</h3>
              <p className="text-gray-600 text-center">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealWorldApplication; 