import Image from 'next/image';

const EasySteps = () => {
  const steps = [
    {
      number: '01',
      icon: '/icons/explore.svg',
      description: 'Explore tokenized business'
    },
    {
      number: '02',
      icon: '/icons/funded.svg',
      description: 'Business get funded'
    },
    {
      number: '03',
      icon: '/icons/earn.svg',
      description: 'Everyone earns in the global economy'
    }
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">We do it easy, <span className="text-blue-600">take off seamless</span></h2>
        <div className="flex flex-col space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-blue-600">{step.number}</span>
              <div className="flex items-center bg-blue-100 p-4 rounded-lg shadow-md w-full">
                <Image src={step.icon} alt={step.description} width={40} height={40} className="mr-4" />
                <p className="text-blue-600 font-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EasySteps; 