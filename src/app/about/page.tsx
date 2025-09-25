export default function About() {
  return (
    <div className="pt-16 page-transition">
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About CodeStorm Hub
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We&apos;re a passionate team of developers, designers, and strategists committed to transforming businesses through innovative technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in the transformative power of technology and its ability to solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Founded in 2015, CodeStorm Hub has grown from a small team of passionate developers to a full-service technology company serving clients across 15 countries.
              </p>
            </div>
            
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Innovation-driven approach
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Client-centric solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Quality and reliability
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Continuous learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}