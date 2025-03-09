import Link from 'next/link';

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 text-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Ready to Revolutionize Your RWA Management?
        </h2>
        <p className="mx-auto max-w-[700px] text-lg mb-8">
          Join DOB Protocol and experience the future of automated, trustless profit-sharing systems.
        </p>
        <div className="space-x-4">
          <Link 
            href="/build"
            className="inline-block px-6 py-3 bg-white text-blue-500 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Building with DOB
          </Link>
          <Link 
            href="/demo"
            className="inline-block px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            Schedule a Demo
          </Link>
        </div>
        <p className="mt-4 text-sm">*Investing involves risks. Please read our risk disclaimer before investing.</p>
      </div>
    </section>
  )
}

