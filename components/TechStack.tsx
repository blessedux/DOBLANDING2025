export default function TechStack() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">RWA Tokenization</h3>
            <p className="text-gray-500">Convert real assets to digital tokens</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Zero-Knowledge Proofs</h3>
            <p className="text-gray-500">Ensure privacy and security</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Trusted Execution Environment</h3>
            <p className="text-gray-500">Secure computation platform</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Smart Contracts</h3>
            <p className="text-gray-500">Automate agreements and transactions</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">AI Treasury Management</h3>
            <p className="text-gray-500">Optimize asset allocation</p>
          </div>
        </div>
      </div>
    </section>
  )
}

