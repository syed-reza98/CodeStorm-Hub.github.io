import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Let&apos;s discuss your project and see how we can help you achieve your goals.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          Start Your Project Today
        </Link>
      </div>
    </section>
  );
}