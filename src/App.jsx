import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodeEditor from './components/CodeEditor';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/editor" element={<CodeEditor />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
