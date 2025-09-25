import { Services } from '@/components/sections/Services';

export default function ServicesPage() {
  return (
    <div className="pt-16 page-transition">
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>
      </section>
      <Services />
    </div>
  );
}