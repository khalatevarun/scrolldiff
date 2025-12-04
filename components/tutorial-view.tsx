"use client"

import {
  Selection,
  Selectable,
  SelectionProvider,
} from "codehike/utils/selection"
import { Pre, HighlightedCode } from "codehike/code"
import { tokenTransitions } from "@/components/annotations/token-transitions"
import Link from "next/link"

interface Step {
  title: string
  children: React.ReactNode
  highlightedCode: HighlightedCode
}

export function TutorialView({ steps }: { steps: Step[] }) {
  return (
    <SelectionProvider className="flex gap-0 w-full">
      <div className="flex-1 mt-32 mb-[90vh] ml-8 pr-4 prose prose-invert max-w-lg">
        <button 
          onClick={() => window.location.reload()}
          className="mb-8 text-sm text-zinc-400 hover:text-zinc-100 flex items-center gap-2 transition-colors"
        >
          ← Create New Explanation
        </button>
        {steps.map((step, i) => (
          <Selectable
            key={i}
            index={i}
            selectOn={["click", "scroll"]}
            className="border-l-4 border-zinc-700 data-[selected=true]:border-blue-400 px-5 py-2 mb-24 rounded bg-zinc-900 transition-colors duration-200"
          >
            <h2 className="mt-4 text-xl font-semibold text-zinc-100">{step.title}</h2>
            <div className="text-zinc-300 mt-2">
              {step.children}
            </div>
          </Selectable>
        ))}
      </div>
      <div className="flex-1 sticky top-0 h-screen bg-zinc-950 border-l border-zinc-800 p-6 overflow-hidden">
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden h-full flex flex-col">
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <div className="flex-1 overflow-auto">
            <Selection
              from={steps.map((step) => (
                <Pre
                  code={step.highlightedCode}
                  className="bg-transparent p-4 text-sm"
                  style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                  handlers={[tokenTransitions]}
                />
              ))}
            />
          </div>
        </div>
      </div>
    </SelectionProvider>
  )
}
