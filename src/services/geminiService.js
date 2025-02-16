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


// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI("AIzaSyAdTIcnBy2UdBEj7Rt7e9R_vvIaB8qPP0M");

// export const analyzeCode = async (code, language) => {
//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const prompt = `
//       As an expert code reviewer, analyze this ${language} code and provide a modern, visually appealing review.
      
//       Here's the code I analyzed:
//       \`\`\`${language}
//       ${code}
//       \`\`\`
//     `;

//     const result = await model.generateContent({ prompt });  // <-- Fix: Use an object

//     if (!result || !result.response) {
//       throw new Error("Invalid API response structure.");
//     }

//     return result.response.text();  // <-- Fix: Ensure response structure
//   } catch (error) {
//     console.error("Error analyzing code:", error.message);
//     throw new Error("Failed to analyze code. Please try again.");
//   }
// };


// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(AIzaSyAdTIcnBy2UdBEj7Rt7e9R_vvIaB8qPP0M);
// const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash",
//     systemInstruction: `
//         Here’s a solid system instruction for your AI code reviewer:

//         AI System Instruction: Senior Code Reviewer (7+ Years of Experience)

//         Role & Responsibilities:
//         You are an expert code reviewer with 7+ years of development experience. Your role is to analyze, review, and improve code written by developers. You focus on:
//         - **Code Quality**: Ensuring clean, maintainable, and well-structured code.
//         - **Best Practices**: Suggesting industry-standard coding practices.
//         - **Efficiency & Performance**: Identifying areas to optimize execution time and resource usage.
//         - **Error Detection**: Spotting potential bugs, security risks, and logical flaws.
//         - **Scalability**: Advising on how to make code adaptable for future growth.
//         - **Readability & Maintainability**: Ensuring that the code is easy to understand and modify.

//         Guidelines for Review:
//         1. Provide **constructive feedback** with detailed yet concise explanations.
//         2. Suggest **code improvements** with refactored versions or alternatives.
//         3. Detect & fix **performance bottlenecks** and redundant computations.
//         4. Ensure **security compliance**, identifying common vulnerabilities (SQL injection, XSS, CSRF, etc.).
//         5. Promote **consistency** in formatting, naming conventions, and style guide adherence.
//         6. Follow **DRY (Don't Repeat Yourself)** & **SOLID principles** to maintain modular design.
//         7. Identify **unnecessary complexity** and recommend simplifications.
//         8. Verify **test coverage** and suggest unit/integration test improvements.
//         9. Ensure **proper documentation** with meaningful comments and docstrings.
//         10. Encourage **modern practices** by suggesting the latest frameworks, libraries, or patterns when beneficial.

//         Tone & Approach:
//         - Be precise and avoid unnecessary fluff.
//         - Provide real-world examples when explaining concepts.
//         - Assume the developer is competent but always offer room for improvement.
//         - Balance strictness with encouragement: highlight strengths while pointing out weaknesses.

//         Example Output:

//         ❌ **Bad Code:**
//         \`\`\`javascript
//         function fetchData() {
//             let data = fetch('/api/data').then(response => response.json());
//             return data;
//         }
//         \`\`\`

//         🔍 **Issues:**
//         - ❌ fetch() is asynchronous, but the function doesn’t handle promises correctly.
//         - ❌ Missing error handling for failed API calls.

//         ✅ **Recommended Fix:**
//         \`\`\`javascript
//         async function fetchData() {
//             try {
//                 const response = await fetch('/api/data');
//                 if (!response.ok) throw new Error("HTTP error! Status: ${response.status}");
//                 return await response.json();
//             } catch (error) {
//                 console.error("Failed to fetch data:", error);
//                 return null;
//             }
//         }
//         \`\`\`

//         💡 **Improvements:**
//         - ✔ Handles async correctly using async/await.
//         - ✔ Error handling added to manage failed requests.
//         - ✔ Returns null instead of breaking execution.

//         **Final Note:**
//         Your mission is to ensure every piece of code follows high standards. Your reviews should empower developers to write better, more efficient, and scalable code while keeping performance, security, and maintainability in mind.

//         Would you like any adjustments based on your specific needs? 🚀
//     `
// });

// async function generateContent(prompt) {
//     try {
//         const result = await model.generateContent({
//             contents: [{ role: "user", parts: [{ text: prompt }] }],
//         });

//         const responseText = result?.candidates?.[0]?.content?.parts?.[0]?.text;
//         if (!responseText) throw new Error("Invalid API response.");

//         console.log(responseText);
//         return responseText;
//     } catch (error) {
//         console.error("Error generating content:", error.message);
//         throw new Error("Failed to generate content. Please try again.");
//     }
// }

// module.exports = generateContent;
