import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const AnalysisModal = ({ analysis, isAnalyzing, error, setAnalysis }) => {
  return (
    (analysis || isAnalyzing) && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 backdrop-blur-xl rounded-2xl border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🤖</span>
              <h2 className="text-2xl font-bold text-white">AI Analysis</h2>
            </div>
            {!isAnalyzing && (
              <button
                onClick={() => setAnalysis(null)}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <span className="text-gray-400 hover:text-white text-xl">×</span>
              </button>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {isAnalyzing ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-blue-400">Analyzing your code...</p>
              </div>
            ) : error ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 flex items-center gap-2 p-4 bg-red-500/10 rounded-lg border border-red-500/20"
              >
                <span>❌</span>
                <span>{error}</span>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="prose prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-300 prose-strong:text-blue-400 prose-code:text-purple-400 prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-500/10 prose-blockquote:px-4"
              >
                <ReactMarkdown
                  components={{
                    h2: ({ node, ...props }) => (
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 pb-2 border-b border-gray-800"
                        {...props}
                      />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <motion.blockquote
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-lg my-4"
                        {...props}
                      />
                    ),
                    code: ({ node, inline, ...props }) => (
                      inline ? (
                        <code {...props} className="bg-black/50 text-gray-300 px-1 py-0.5 rounded" />
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="relative group"
                        >
                          <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => navigator.clipboard.writeText(props.children)}
                              className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                            >
                              📋
                            </button>
                          </div>
                          <pre {...props} className="bg-stone-950 rounded-lg !mt-0 p-4" />
                        </motion.div> 
                      )
                    ),
                  }}
                >
                  {analysis}
                </ReactMarkdown>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    )
  );
};

export default AnalysisModal;
