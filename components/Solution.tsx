import Image from "next/image"

export default function Solution() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Introducing DOB Protocol
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Automated Distribution System</h3>
            <p className="text-gray-500">Streamline profit sharing with our cutting-edge automation</p>
            <h3 className="text-xl font-bold">Privacy-Preserving Technology</h3>
            <p className="text-gray-500">Ensure data confidentiality while maintaining transparency</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">AI-Driven Optimization</h3>
            <p className="text-gray-500">Maximize returns with intelligent asset management</p>
            <h3 className="text-xl font-bold">Real-Time Settlement</h3>
            <p className="text-gray-500">Instant profit distribution to stakeholders</p>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-4">
          <Image src="/placeholder.svg?height=50&width=100" alt="Partner Logo" width={100} height={50} />
          <Image src="/placeholder.svg?height=50&width=100" alt="Security Certification" width={100} height={50} />
        </div>
      </div>
    </section>
  )
}

