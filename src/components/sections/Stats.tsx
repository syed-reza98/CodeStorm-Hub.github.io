'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Users, Award, Clock, Globe, TrendingUp, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface Stat {
  id: string;
  value: number;
  label: string;
  suffix?: string;
  icon: React.ElementType;
  gradient: string;
}

const stats: Stat[] = [
  {
    id: 'clients',
    value: 250,
    label: 'Happy Clients',
    suffix: '+',
    icon: Users,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'projects',
    value: 500,
    label: 'Projects Completed',
    suffix: '+',
    icon: Award,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'experience',
    value: 8,
    label: 'Years Experience',
    suffix: '+',
    icon: Clock,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 'countries',
    value: 15,
    label: 'Countries Served',
    suffix: '+',
    icon: Globe,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'growth',
    value: 150,
    label: 'Growth Rate',
    suffix: '%',
    icon: TrendingUp,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'rating',
    value: 98,
    label: 'Client Satisfaction',
    suffix: '%',
    icon: Star,
    gradient: 'from-yellow-500 to-orange-500',
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
    <section className="section-sm bg-muted/50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Our Impact
          </Badge>
          <h2 className="text-headline mb-4">
            Trusted by{' '}
            <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Join hundreds of companies who have transformed their digital presence with us.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover="lift" className="text-center group">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className={`absolute inset-0 w-14 h-14 mx-auto rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300`} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-3xl md:text-4xl font-bold text-gradient">
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-caption font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
          className="text-center"
        >
          <p className="text-caption text-muted-foreground mb-8 uppercase tracking-wider font-medium">
            Trusted by Leading Companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center cursor-pointer"
              >
                <span className="text-muted-foreground text-sm font-medium">
                  Logo {i}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}