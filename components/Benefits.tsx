export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">For Institutional Investors</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li>Higher Capital Efficiency</li>
              <li>Regulatory Compliance</li>
              <li>Scalable Infrastructure</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">For Crypto Investors</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-500">
              <li>Real-World Yields</li>
              <li>DeFi Integration</li>
              <li>Automated Returns</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

