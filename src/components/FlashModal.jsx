import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlashModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800/90 backdrop-blur-xl p-8 rounded-2xl max-w-2xl mx-4 shadow-2xl border border-gray-700/50"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="text-4xl">⚡</span>
                Flash 2.0
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 text-gray-300">
              <p className="text-xl font-medium text-blue-400">
                Our newest multimodal model, with next generation features and improved capabilities
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span>🎯</span> Input Capabilities
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Audio processing</li>
                    <li>Image analysis</li>
                    <li>Video processing</li>
                    <li>Text understanding</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span>⚙️</span> Features
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Code generation</li>
                    <li>Data extraction</li>
                    <li>File analysis</li>
                    <li>Graph generation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                  <span>⚡</span> Performance
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    Low latency responses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    Enhanced performance metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    Built for agentic experiences
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlashModal;
