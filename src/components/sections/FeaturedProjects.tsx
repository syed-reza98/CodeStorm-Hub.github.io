export function FeaturedProjects() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcase of our recent work and successful client collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card-hover bg-gray-100 dark:bg-gray-800 h-64 rounded-xl flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Project {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}