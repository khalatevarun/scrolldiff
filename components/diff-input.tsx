"use client"

import { useState } from "react"
import Image from "next/image"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-javascript"

interface DiffInputProps {
  onSubmit: (oldCode: string, newCode: string) => void
  isLoading: boolean
}

export function DiffInput({ onSubmit, isLoading }: DiffInputProps) {
  const [oldCode, setOldCode] = useState("")
  const [newCode, setNewCode] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (oldCode && newCode) {
      onSubmit(oldCode, newCode)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <div className="flex flex-col items-center justify-center gap-4 mb-8">
        <Image
          src="/96.png"
          alt="Scroll the Diff Logo"
          width={45}
          height={45}
          className="rounded-xl shadow-2xl"
        />
        <h1 className="text-3xl font-bold text-zinc-100">
          scroll the diff
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-400">
              original code
            </label>
            <div className="relative h-96 bg-zinc-900 border border-zinc-800 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent overflow-hidden">
              <Editor
                value={oldCode}
                onValueChange={setOldCode}
                highlight={code => highlight(code, languages.js, 'js')}
                padding={16}
                className="font-mono text-sm text-zinc-200 min-h-full"
                textareaClassName="focus:outline-none"
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 14,
                  minHeight: '100%',
                }}
                placeholder="// Paste your original code here..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-400">
              new code
            </label>
            <div className="relative h-96 bg-zinc-900 border border-zinc-800 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent overflow-hidden">
              <Editor
                value={newCode}
                onValueChange={setNewCode}
                highlight={code => highlight(code, languages.js, 'js')}
                padding={16}
                className="font-mono text-sm text-zinc-200 min-h-full"
                textareaClassName="focus:outline-none"
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 14,
                  minHeight: '100%',
                }}
                placeholder="// Paste your new code here..."
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3 bg-[#1FB8CD]/80 hover:bg-[#1FB8CD]/50 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                preparing the diff…
              </>
            ) : (
              "start scrolling"
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
