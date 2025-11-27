"use client"

import { useState } from "react"
import { DiffInput } from "@/components/diff-input"
import { generateTutorial } from "./actions"
import { TutorialView } from "@/components/tutorial-view"

export default function Page() {
  const [isLoading, setIsLoading] = useState(false)
  const [tutorialSteps, setTutorialSteps] = useState<any[] | null>(null)

  const handleGenerate = async (oldCode: string, newCode: string) => {
    setIsLoading(true)
    try {
      const steps = await generateTutorial(oldCode, newCode)
      setTutorialSteps(steps)
    } catch (error) {
      console.error(error)
      alert("Failed to generate tutorial")
    } finally {
      setIsLoading(false)
    }
  }

  if (tutorialSteps) {
    return <TutorialView steps={tutorialSteps} />
  }

  return <DiffInput onSubmit={handleGenerate} isLoading={isLoading} />
}
