'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Play, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: e.clientX / window.innerWidth, 
        y: e.clientY / window.innerHeight 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 20,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Interactive Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-20 blur-2xl"
          style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            right: `${(1 - mousePosition.x) * 50}%`,
            bottom: `${(1 - mousePosition.y) * 50}%`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <Badge variant="glass" className="px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Transforming Ideas into Digital Reality
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-display mb-6 max-w-4xl mx-auto"
        >
          Build the{' '}
          <span className="text-gradient-2 relative">
            Future
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur-lg"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>{' '}
          with{' '}
          <span className="text-gradient">Modern Technology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-subtitle text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          We storm through digital challenges to deliver cutting-edge software solutions 
          that propel your business forward. From concept to deployment, we&apos;re your trusted technology partner.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button size="xl" asChild>
            <Link href="/contact" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button variant="ghost" size="xl" className="group">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 ml-0.5" />
            </div>
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-16"
        >
          {[
            { value: '250+', label: 'Projects' },
            { value: '15+', label: 'Countries' },
            { value: '98%', label: 'Success Rate' },
            { value: '5+', label: 'Years' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-caption">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-xs mb-2">Scroll to explore</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-3 opacity-20 blur-xl animate-bounce-gentle" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-gradient-4 opacity-20 blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-gradient-2 opacity-20 blur-xl animate-bounce-gentle" style={{ animationDelay: '2s' }} />
    </section>
  );
}