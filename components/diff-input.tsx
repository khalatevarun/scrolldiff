"use client"

import { useState } from "react"

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
      <h1 className="text-3xl font-bold text-center mb-8 text-zinc-100">
        scroll the diff
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-400">
              original code
            </label>
            <textarea
              value={oldCode}
              onChange={(e) => setOldCode(e.target.value)}
              className="w-full h-96 p-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm text-zinc-200 resize-none"
              placeholder="// Paste your original code here..."
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-400">
              new code
            </label>
            <textarea
              value={newCode}
              onChange={(e) => setNewCode(e.target.value)}
              className="w-full h-96 p-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm text-zinc-200 resize-none"
              placeholder="// Paste your new code here..."
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="animate-spin">⏳</span> preparing the diff…
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
