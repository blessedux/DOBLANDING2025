export default function Problem() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          The Cost of Manual RWA Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2">High Administrative Costs</h3>
            <p className="text-gray-500">Delays in profit distribution and increased operational expenses</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2">Lack of Transparency</h3>
            <p className="text-gray-500">Limited trust in investment returns and processes</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2">Limited Scalability</h3>
            <p className="text-gray-500">Difficulty in managing multiple assets efficiently</p>
          </div>
        </div>
      </div>
    </section>
  )
}

