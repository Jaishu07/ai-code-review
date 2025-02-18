import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Editor from "@monaco-editor/react";
import FlashModal from './FlashModal';
import CommunityForm from './CommunityForm';
import { analyzeCode } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

const menuItems = [
  { name: 'Home', emoji: '🏠', path: '/' },
  { name: 'Code Editor', emoji: '📝', path: '/editor' },
  { name: 'Flash 2.0', emoji: '⚡', action: 'openFlash' },
  { name: 'Community', emoji: '🤝', action: 'openCommunity' },
  // { name: 'About', emoji: '⚙️', path: '/about' },
];

const languages = [
  { name: 'JavaScript', value: 'javascript' },
  { name: 'Python', value: 'python' },
  { name: 'Java', value: 'java' },
  { name: 'C++', value: 'cpp' },
  { name: 'TypeScript', value: 'typescript' }
];

const CodeEditorComponent = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('// Start coding here...');
  const [language, setLanguage] = useState('javascript');
  const [sidebarWidth, setSidebarWidth] = useState(200);
  const [theme, setTheme] = useState('vs-dark');
  const [isFlashModalOpen, setIsFlashModalOpen] = useState(false);
  const [showCommunityForm, setShowCommunityForm] = useState(false);
  const [analysis, setAnalysis] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');
  const [messageType, setMessageType] = useState('feedback');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dividerRef = useRef(null);
  const editorRef = useRef(null);

  const handleMouseDown = (e) => {
    // setIsResizing(true);
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      // if (!isResizing) return;

      // const containerHeight = window.innerHeight;
      // const mouseY = e.clientY;
      // const newPosition = (mouseY / containerHeight) * 100;

      // // Limit the divider position between 30% and 70%
      // const limitedPosition = Math.min(Math.max(newPosition, 30), 70);
      // setDividerPosition(limitedPosition);
    };

    const handleMouseUp = () => {
      // setIsResizing(false);
    };

    // if (isResizing) {
    //   document.addEventListener('mousemove', handleMouseMove);
    //   document.addEventListener('mouseup', handleMouseUp);
    // }

    return () => {
      // document.removeEventListener('mousemove', handleMouseMove);
      // document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    
    // Configure editor settings
    editor.updateOptions({
      minimap: {
        enabled: true,
        scale: 10,
        showSlider: "mouseover"
      },
      fontSize: 14,
      lineHeight: 21,
      fontFamily: "'Fira Code', Consolas, 'Courier New', monospace",
      fontLigatures: true,
      scrollBeyondLastLine: false,
      smoothScrolling: true,
      cursorBlinking: "smooth",
      cursorSmoothCaretAnimation: true,
      renderWhitespace: "selection",
      padding: { top: 10 },
      scrollbar: {
        verticalScrollbarSize: 10,
        horizontalScrollbarSize: 10
      }
    });
  };

  const handleMenuClick = (item) => {
    if (item.action === 'openFlash') {
      setIsFlashModalOpen(true);
      setShowCommunityForm(false);
    } else if (item.action === 'openCommunity') {
      setShowCommunityForm(true);
      setIsFlashModalOpen(false);
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const handleReviewCode = async () => {
    try {
      setIsAnalyzing(true);
      setError('');
      const result = await analyzeCode(code, language);
      setAnalysis(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', { messageType, name, email, subject, message });
    setShowCommunityForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex animated-bg relative">
      {/* Dashboard Sidebar */}
      <div 
        style={{ width: `${sidebarWidth}px` }}
        className="bg-gray-800/30 backdrop-blur-xl text-white p-4 border-r border-gray-700/50 relative flex-shrink-0 z-10"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <h1 className="text-xl font-bold">AI Code Review</h1>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item)}
                className="w-full px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors flex items-center gap-3"
              >
                <span className="text-xl">{item.emoji}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-blue-700/30 backdrop-blur-xl">
          <div className="px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🚀</span>
              <h1 className="text-xl font-bold text-white">Welcome to CodeRow</h1>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                BETA
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFlashModalOpen(true)}
                className="px-4 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 text-sm flex items-center space-x-2 transition-colors"
              >
                <span>⚡</span>
                <span>What's New</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCommunityForm(true)}
                className="px-4 py-1.5 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/30 text-sm flex items-center space-x-2 transition-colors"
              >
                <span>💬</span>
                <span>Feedback</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Code Editor Section */}
        <div className="flex-1 p-6">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📝</span>
                <h2 className="text-2xl font-bold text-white">Code Editor</h2>
              </div>
              <div className="flex items-center space-x-3">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-gray-700/50 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                >
                  {languages.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                      {lang.name}
                    </option>
                  ))}
                </select>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="bg-gray-700/50 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                >
                  <option value="vs-dark">Dark</option>
                  <option value="light">Light</option>
                </select>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReviewCode}
                  disabled={isAnalyzing}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isAnalyzing ? '⚡' : '✨'}</span>
                  <span>{isAnalyzing ? 'Analyzing...' : 'Review Code'}</span>
                </motion.button>
              </div>
            </div>
            <div className="flex-1 bg-gray-800/30 backdrop-blur-xl rounded-lg p-4 border border-gray-700/50">
              <Editor
                height="100%"
                defaultLanguage="javascript"
                language={language}
                value={code}
                theme={theme}
                onChange={setCode}
                onMount={handleEditorDidMount}
                options={{
                  fontSize: 14,
                  minimap: { enabled: true },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  wordWrap: "on"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* AI Analysis Modal */}
      {(analysis || isAnalyzing) && (
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
            className="bg-gray-800/90 backdrop-blur-xl rounded-xl border border-gray-700/50 w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl"
          >
            {/* Modal Header - Fixed */}
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
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
            </div>
            
            {/* Modal Content - Scrollable */}
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
                  className="prose prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:text-gray-300 prose-p:text-gray-300 prose-strong:text-blue-400 prose-code:text-purple-400 prose-pre:bg-gray-800/50 prose-pre:border prose-pre:border-gray-700/50 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-500/10 prose-blockquote:py-1 prose-blockquote:px-4"
                >
                  <ReactMarkdown
                    components={{
                      h2: ({ node, ...props }) => (
                        <motion.h2
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center gap-3 pb-2 border-b border-gray-700"
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
                          <code {...props} className="bg-black-500/10 text-zinc-700 px-1 py-0.5 rounded" />
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
                            <pre {...props} className="bg-stone-950 rounded-lg !mt-0" />
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
      )}

      {/* Community Form Modal */}
      {showCommunityForm && (
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
            className="bg-gray-800/90 backdrop-blur-xl rounded-xl border border-gray-700/50 w-full max-w-2xl shadow-2xl"
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💬</span>
                  <h2 className="text-2xl font-bold text-white">Community Feedback</h2>
                </div>
                <button
                  onClick={() => setShowCommunityForm(false)}
                  className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <span className="text-gray-400 hover:text-white text-xl">×</span>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-6">
                {/* Message Type Selection */}
                <div>
                  <label className="block text-white font-medium mb-2">Message Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setMessageType('feedback')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        messageType === 'feedback'
                          ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                          : 'border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <span className="text-2xl">💡</span>
                        <span>Feedback</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setMessageType('report')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        messageType === 'report'
                          ? 'border-red-500 bg-red-500/10 text-red-400'
                          : 'border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <span className="text-2xl">🚨</span>
                        <span>Report Issue</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={messageType === 'feedback' ? "What's your feedback about?" : "What issue are you reporting?"}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={messageType === 'feedback' ? "Share your thoughts, suggestions, or ideas..." : "Describe the issue in detail..."}
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    disabled={!name || !email || !subject || !message}
                    className={`px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                      messageType === 'report'
                        ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-600 text-white'
                    }`}
                  >
                    <span>{messageType === 'feedback' ? '💡' : '🚨'}</span>
                    <span>Submit {messageType === 'feedback' ? 'Feedback' : 'Report'}</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Flash Modal */}
      <FlashModal 
        isOpen={isFlashModalOpen} 
        onClose={() => setIsFlashModalOpen(false)} 
      />
    </div>
  );
};

export default CodeEditorComponent;
