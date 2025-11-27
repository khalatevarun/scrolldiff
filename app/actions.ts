"use server"

import { GoogleGenerativeAI } from "@google/generative-ai"
import { getTutorialData } from "@/lib/tutorial-data"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function generateTutorial(oldCode: string, newCode: string) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set")
  }

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

  const prompt = `
    You are an expert coding tutor. I have an original piece of code and a new, updated version.
    Your task is to create a step-by-step tutorial explaining how to transform the original code into the new code.
    
    Original Code:
    \`\`\`
    ${oldCode}
    \`\`\`

    New Code:
    \`\`\`
    ${newCode}
    \`\`\`

    Please generate an MDX response using the CodeHike "steps" format.
    
    Format:
    
    ## !!steps [Step Title]

    [Step Description in Markdown]

    \`\`\`js ! file.js
    [Code Snippet]
    \`\`\`

    Rules:
    1. Start with the Original Code as the first step.
    2. End with the New Code as the last step.
    3. Include intermediate steps to show the transformation.
    4. Use "!!steps" exactly as shown in the header.
    5. Include the code block for EVERY step.
    6. Always use "js" as the language and "file.js" as the filename.
    7. Do not wrap the entire response in markdown code blocks. Just return the raw MDX content.
  `

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()

  return getTutorialData(text)
}
