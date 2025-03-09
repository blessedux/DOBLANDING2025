import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center items-center">
      <div className="flex justify-center items-center w-full">
        <div className="max-w-3xl mx-auto px-4 md:px-6 bg-white text-blue-500 rounded-lg shadow-2xl p-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
            Ready to Revolutionize Your RWA Management?
          </h2>
          <p className="text-lg mb-6">Let's Chat</p>
          <div className="space-x-4">
            <Link 
              href="/build"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
              Start Building with DOB
            </Link>
            <Link 
              href="/demo"
              className="inline-block px-6 py-3 border-2 border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-100 transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-1/2">
        {/* Animated card placeholder */}
      </div>
    </section>
  );
}

