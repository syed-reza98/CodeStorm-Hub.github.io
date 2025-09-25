export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card bg-white dark:bg-gray-900 p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                &quot;Great experience working with CodeStorm Hub. They delivered exactly what we needed.&quot;
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                Client {i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}