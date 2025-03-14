import Link from 'next/link';

export default function Invest() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Invest in DOB Protocol</h1>
        
        <div className="space-y-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow transition-colors duration-300">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Investment Opportunities</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our investment page is currently under development. For now, you can visit our main platform for investment options:
            </p>
            
            <div className="mt-6">
              <a 
                href="https://home.dobprotocol.com/home" 
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit DOB Protocol Platform
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 