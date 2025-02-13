import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAdTIcnBy2UdBEj7Rt7e9R_vvIaB8qPP0M");

export const analyzeCode = async (code, language) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      As an expert code reviewer, analyze this ${language} code and provide a modern, visually appealing review. 
      Format your response using this exact structure (keep all emojis and formatting):

      ## ⭐ Quality Score
      \`\`\`
      Overall Score: [X]/10
      Code Health: [Excellent/Good/Fair/Needs Improvement]
      \`\`\`

      ## 🎯 Key Metrics
      - **Readability**: [X]/10
      - **Maintainability**: [X]/10
      - **Performance**: [X]/10
      - **Security**: [X]/10

      ## 🚨 Critical Issues
      > These issues need immediate attention
      ${Array(3).fill('').map(() => '- [ ] Issue description').join('\n')}

      ## 💫 Quick Wins
      > Easy improvements for better code
      ${Array(3).fill('').map(() => '- ✨ Improvement suggestion').join('\n')}

      ## 🔍 Detailed Analysis

      ### 💪 Strengths
      ${Array(3).fill('').map(() => '- 🌟 Strength description').join('\n')}

      ### 🛠️ Areas for Improvement
      ${Array(3).fill('').map(() => '- 📈 Improvement area').join('\n')}

      ### 🎨 Code Style
      ${Array(3).fill('').map(() => '- 🖌️ Style suggestion').join('\n')}

      ## 🚀 Performance Tips
      \`\`\`diff
      + What works well
      - What could be optimized
      ! Important considerations
      \`\`\`

      ## 📚 Learning Resources
      > Level up your coding skills
      ${Array(3).fill('').map(() => '- 📖 [Resource Name](link) - Brief description').join('\n')}

      ## 🎉 Next Steps
      1. 🎯 First priority action
      2. 🔄 Second priority action
      3. ✨ Third priority action

      Here's the code I analyzed:
      \`\`\`${language}
      ${code}
      \`\`\`
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error analyzing code:', error);
    throw new Error('Failed to analyze code. Please try again.');
  }
};
