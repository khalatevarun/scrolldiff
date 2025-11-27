# Scrollycoding Demo

This is a standalone Next.js project replicating the Scrollycoding layout from Code Hike.

## Getting Started

1.  Install dependencies:
    ```bash
    pnpm install
    ```

2.  Run the development server:
    ```bash
    pnpm dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal) with your browser to see the result.

## Project Structure

-   `app/page.tsx`: The main page implementing the scrollycoding layout.
-   `app/content.md`: The content for the scrollycoding steps.
-   `components/annotations/token-transitions.tsx`: Token transitions annotation.
-   `next.config.mjs`: Next.js configuration with Code Hike MDX plugin.
-   `tailwind.config.ts`: Tailwind CSS configuration.
