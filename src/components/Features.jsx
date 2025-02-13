import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Integrate Google AI models',
    description: 'Build with cutting-edge AI models, like Gemini, from Google DeepMind.',
    icon: '🔌',
  },
  {
    title: 'Developer Tools',
    description: 'Access comprehensive tools and APIs for seamless AI integration.',
    icon: '🛠️',
  },
  {
    title: 'Cross-Platform',
    description: 'Deploy your AI-powered applications across multiple platforms.',
    icon: '🌐',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Start building 🔑
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
