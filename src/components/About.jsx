import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import proflie from './profile-web.jpg';

const About = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Analysis',
      description: 'Advanced code review powered by cutting-edge AI models.'
    },
    {
      icon: '⚡',
      title: 'Real-time Processing',
      description: 'Instant feedback and suggestions as you type.'
    },
    {
      icon: '🎯',
      title: 'Multiple Languages',
      description: 'Support for JavaScript, Python, Java, and more.'
    },
    {
      icon: '🔄',
      title: 'Version Control',
      description: 'Seamless integration with Git and other VCS.'
    }
  ];

  const techStack = [
    'React', 'Node.js', 'TypeScript', 'Next.js', 'TailwindCSS', 'MongoDB',
    'GraphQL', 'Docker', 'AWS', 'Git'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800/30 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold">CodeRow</span>
            </Link>
            <Link
              to="/editor"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <span>📝</span>
              Open Editor
            </Link>
          </div>
        </div>
      </nav>

      {/* Platform Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About CodeRow
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CodeRow is a next-generation code review platform that combines the power of AI 
            with intuitive design to help developers write better code, faster.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Developer Profile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl overflow-hidden bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
        >
          {/* Profile Header */}
          <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 relative">
           
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="flex flex-col items-center justify-center  px-8 pb-8">
            {/* Profile Image */}
            <div className=" relative -mt-24 mb-8">
              <img
                src={proflie}
                alt="Yashwant Sharma"
                className="w-65 h-60   rounded-full border-4 border-gray-800 shadow-xl mx-auto"
              />
            </div>

            {/* Profile Content */}
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div>
                <h2 className="text-4xl font-bold">Yashwant Sharma</h2>
                <p className="text-blue-400 mt-2 text-lg">Full-Stack Developer </p>
              </div>

              <p className="text-gray-300 text-lg">
                Passionate about creating developer tools that enhance productivity and code quality.
                With expertise in full-stack development and AI integration, I'm dedicated to building
                the future of code review.
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="https://github.com/Jaishu07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/yashwantharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/yashwant11010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Tech Stack & Expertise</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            Have questions about CodeRow? Want to contribute or collaborate?
          </p>
          <a
            href="mailto:contact@coderow.dev"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            <span>✉️</span>
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
