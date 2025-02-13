import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Editor from "@monaco-editor/react";
import FlashModal from './FlashModal';
import CommunityForm from './CommunityForm';

const menuItems = [
  { name: 'Home', emoji: '🏠', path: '/' },
  { name: 'Code Editor', emoji: '📝', path: '/editor' },
  { name: 'Flash 2.0', emoji: '⚡', action: 'openFlash' },
  { name: 'Community', emoji: '🤝', action: 'openCommunity' },
  { name: 'Settings', emoji: '⚙️', path: '/settings' },
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
  const [mainDividerPosition, setMainDividerPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const [isMainDividerResizing, setIsMainDividerResizing] = useState(false);
  const [theme, setTheme] = useState('vs-dark');
  const [isFlashModalOpen, setIsFlashModalOpen] = useState(false);
  const [showCommunityForm, setShowCommunityForm] = useState(false);
  
  const sidebarRef = useRef(null);
  const mainDividerRef = useRef(null);
  const editorRef = useRef(null);

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

  const startResizing = (e) => {
    setIsResizing(true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopResizing);
  };

  const startMainDividerResizing = (e) => {
    setIsMainDividerResizing(true);
    document.addEventListener('mousemove', handleMainDividerMouseMove);
    document.addEventListener('mouseup', stopMainDividerResizing);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = e.clientX;
      if (newWidth >= 150 && newWidth <= 400) {
        setSidebarWidth(newWidth);
      }
    }
  };

  const handleMainDividerMouseMove = (e) => {
    if (isMainDividerResizing && mainDividerRef.current) {
      const containerRect = mainDividerRef.current.parentElement.getBoundingClientRect();
      const newPosition = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      
      if (newPosition >= 30 && newPosition <= 70) {
        setMainDividerPosition(newPosition);
      }
    }
  };

  const stopResizing = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', stopResizing);
  };

  const stopMainDividerResizing = () => {
    setIsMainDividerResizing(false);
    document.removeEventListener('mousemove', handleMainDividerMouseMove);
    document.removeEventListener('mouseup', stopMainDividerResizing);
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

  return (
    <div className="min-h-screen bg-gray-900 flex animated-bg relative">
      {/* Dashboard Sidebar */}
      <div 
        ref={sidebarRef}
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
      <div className="flex-1 flex relative">
        {/* Code Editor Section */}
        <div 
          className="border-r border-gray-700 overflow-hidden"
          style={{ width: `${mainDividerPosition}%` }}
        >
          <div className="p-6">
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
              </div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-lg overflow-hidden border border-gray-700/50 h-[calc(100vh-200px)]">
              <Editor
                height="100%"
                defaultLanguage="javascript"
                language={language}
                value={code}
                theme={theme}
                onChange={setCode}
                onMount={handleEditorDidMount}
                options={{
                  automaticLayout: true,
                  wordWrap: "on",
                  renderLineHighlight: "all",
                  bracketPairColorization: {
                    enabled: true
                  }
                }}
                className="min-h-full"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
            >
              <span>✨</span>
              <span>Review Code</span>
            </motion.button>
          </div>
        </div>

        {/* Main Divider */}
        <div
          ref={mainDividerRef}
          className={`resizer ${isMainDividerResizing ? 'resizing' : ''}`}
          onMouseDown={startMainDividerResizing}
        />

        {/* AI Response Section */}
        <div 
          className="p-6 overflow-hidden"
          style={{ width: `${100 - mainDividerPosition}%` }}
        >
          {showCommunityForm ? (
            <CommunityForm />
          ) : (
            <>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">🤖</span>
                <h2 className="text-2xl font-bold text-white">AI Response</h2>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-xl rounded-lg p-4 h-[calc(100vh-200px)] text-white border border-gray-700/50">
                <p className="text-gray-400">AI analysis will appear here after code review... ✨</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Flash Modal */}
      <FlashModal 
        isOpen={isFlashModalOpen} 
        onClose={() => setIsFlashModalOpen(false)} 
      />

      {/* Overlay when resizing */}
      {(isResizing || isMainDividerResizing) && (
        <div className="fixed inset-0 cursor-ew-resize z-50" />
      )}
    </div>
  );
};

export default CodeEditorComponent;
