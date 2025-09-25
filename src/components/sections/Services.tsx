'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Zap, Globe, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on all devices.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Deployment'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions that grow with your business needs.',
    features: ['AWS & Azure', 'DevOps', 'Microservices', 'Auto Scaling'],
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Strategic consulting and implementation to modernize your business processes and technology stack.',
    features: ['Process Automation', 'Legacy Migration', 'Tech Consulting', 'Training'],
  },
  {
    icon: Globe,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
    features: ['Shopify', 'WooCommerce', 'Custom Platforms', 'Payment Gateway'],
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Comprehensive security audits and ongoing maintenance to keep your applications secure and updated.',
    features: ['Security Audits', 'Performance Monitoring', 'Bug Fixes', '24/7 Support'],
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to transform your business and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}