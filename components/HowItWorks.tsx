export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Tokenize Your RWA</h3>
            <p className="text-gray-500">Convert your real-world assets into digital tokens</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Set Distribution Parameters</h3>
            <p className="text-gray-500">Define profit-sharing rules and beneficiaries</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Receive Automated Returns</h3>
            <p className="text-gray-500">Enjoy hassle-free, transparent profit distribution</p>
          </div>
        </div>
      </div>
    </section>
  )
}

