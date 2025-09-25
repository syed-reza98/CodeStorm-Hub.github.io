'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Zap, Globe, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern web applications built with cutting-edge technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'TypeScript', 'Node.js Backend', 'Database Design'],
    gradient: 'from-blue-500 to-cyan-500',
    featured: true,
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional experiences.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Deploy'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure that grows with your business needs.',
    features: ['AWS & Azure', 'DevOps', 'Microservices', 'Auto Scaling'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Strategic consulting to modernize your business processes.',
    features: ['Process Automation', 'Legacy Migration', 'Tech Consulting', 'Training'],
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration.',
    features: ['Shopify', 'WooCommerce', 'Custom Platforms', 'Payment Gateway'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Comprehensive security audits and ongoing maintenance.',
    features: ['Security Audits', 'Performance Monitoring', 'Bug Fixes', '24/7 Support'],
    gradient: 'from-red-500 to-pink-500',
  },
];

export function Services() {
  return (
    <section className="section bg-background">
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
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </Badge>
          <h2 className="text-headline mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Scale Your Business</span>
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive technology solutions 
            that transform your business and drive sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={service.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <Card 
                  hover="lift" 
                  className={`h-full group ${service.featured ? 'ring-2 ring-primary/20' : ''}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {service.featured && (
                        <Badge variant="gradient" className="text-xs">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="group-hover:text-gradient transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="ghost" 
                      className="w-full group/btn justify-between"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-title mb-8">Our Development Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Design', desc: 'Creating user-centered experiences' },
              { step: '03', title: 'Development', desc: 'Building with modern technologies' },
              { step: '04', title: 'Deployment', desc: 'Launching and ongoing support' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-1 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {phase.step}
                  </div>
                  <h4 className="font-semibold mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          <Button size="lg" className="group">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}