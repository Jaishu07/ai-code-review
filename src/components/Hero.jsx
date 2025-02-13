import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800/30 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold">AI Code Review</span>
            </div>
            <button
              onClick={() => navigate('/editor')}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <span>📝</span>
              Open Editor
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
          >
            AI-Powered Code Review
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Get instant feedback on your code with our advanced AI model. Write better code, faster.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/editor')}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold flex items-center gap-2"
            >
              <span>✨</span>
              Try it Now
            </button>
            <button
              onClick={() => window.open('https://github.com/yourusername/ai-code-review')}
              className="px-8 py-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors font-semibold flex items-center gap-2"
            >
              <span>📚</span>
              Documentation
            </button>
          </motion.div>
        </div>

        {/* Features */}
        <div className="mt-32 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🤖',
              title: 'AI-Powered Analysis',
              description: 'Get instant feedback on code quality, potential bugs, and performance improvements.'
            },
            {
              icon: '⚡',
              title: 'Real-time Processing',
              description: 'See results as you type with our advanced real-time processing engine.'
            },
            {
              icon: '🎯',
              title: 'Multiple Languages',
              description: 'Support for JavaScript, Python, Java, C++, and TypeScript.'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-xl border border-gray-700/50"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
