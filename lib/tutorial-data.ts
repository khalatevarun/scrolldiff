import { evaluate } from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx"
import { Block, CodeBlock, parseRoot } from "codehike/blocks"
import { z } from "zod"
import { highlight } from "codehike/code"

const Schema = Block.extend({
  steps: z.array(Block.extend({ code: CodeBlock })),
})

const chConfig = {
  components: {
    code: "Code",
    inlineCode: "InlineCode",
  },
}

export async function getTutorialData(mdxContent: string) {
  try {
    const { default: Content } = await evaluate(mdxContent, {
      ...runtime,
      remarkPlugins: [[remarkCodeHike, chConfig]],
      recmaPlugins: [[recmaCodeHike, chConfig]],
    } as any)

    const { steps } = parseRoot(Content, Schema) as { steps: any[] }

    const processedSteps = await Promise.all(steps.map(async (step) => {
      const highlighted = await highlight(step.code, "github-dark")
      return {
        title: step.title,
        children: step.children,
        highlightedCode: highlighted
      }
    }))

    return processedSteps
  } catch (error) {
    console.error("Error parsing tutorial:", error)
    throw error
  }
}
