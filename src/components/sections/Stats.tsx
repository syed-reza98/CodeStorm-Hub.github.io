'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Users, Award, Clock, Globe } from 'lucide-react';

interface Stat {
  id: string;
  value: number;
  label: string;
  suffix?: string;
  icon: React.ElementType;
}

const stats: Stat[] = [
  {
    id: 'clients',
    value: 250,
    label: 'Happy Clients',
    suffix: '+',
    icon: Users,
  },
  {
    id: 'projects',
    value: 500,
    label: 'Projects Completed',
    suffix: '+',
    icon: Award,
  },
  {
    id: 'experience',
    value: 8,
    label: 'Years Experience',
    suffix: '+',
    icon: Clock,
  },
  {
    id: 'countries',
    value: 15,
    label: 'Countries Served',
    suffix: '+',
    icon: Globe,
  },
];

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our track record speaks for itself. We&apos;ve helped hundreds of companies transform their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-primary rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-2">
                  <div className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8 text-sm uppercase tracking-wider font-medium">
            Trusted by Leading Companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 hover:opacity-75 transition-opacity duration-300">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                  Logo {i}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}