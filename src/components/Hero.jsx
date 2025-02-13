import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      {/* Beta Announcement Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b border-blue-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/30">
                BETA
              </span>
              <p className="text-gray-300 text-sm">
                Welcome to the <span className="text-blue-400 font-medium">CodeRow Beta</span> - Experience the future of AI-powered code review
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/about')}
              className="text-sm px-4 py-1 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                  🚀 Now in Beta
                </span>
              </motion.div>
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                AI-Powered Code Review
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the next generation of code review with our AI-powered platform.
                Get instant feedback and suggestions to write better code.
              </p>
            </div>

            {/* Beta Features */}
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="text-2xl mb-3">🤖</div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Assistant</h3>
                <p className="text-gray-400">Smart code analysis and real-time suggestions as you type.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Beta Features</h3>
                <p className="text-gray-400">Early access to upcoming features and improvements.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-400">Join our beta community and help shape the future.</p>
              </motion.div>
            </div>

            {/* Call to Action */}
            <div className="flex items-center justify-center space-x-4 pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/editor')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/20 flex items-center space-x-2"
              >
                <span>🚀</span>
                <span>Try Beta Now</span>
              </motion.button>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg font-semibold border border-gray-700 flex items-center space-x-2"
                > 
                  <span>📚</span>
                  <span>About</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
