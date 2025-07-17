---
title: "How I Built a Private AI Wellness Coach in Angular with Cursor and Vibe Coding"
date: "2025-07-17"
readTime: "10 min read"
tags: ["ResilienceAI", "AI", "Vibe Coding", "Angular", WebLLM]
excerpt: "A deep dive into how I used WebLLM, Cursor, and Three.js to build a private AI wellness coach powered by Angular and 3D avatars."
featuredImage: "/images/blog/resilience-ai-vibe-coding.png"
slug: "resilience-ai-vibe-coding"
---

# How I Built a Private AI Wellness Coach in Angular with Cursor and Vibe Coding

I've just finished a project that felt different. It wasn't just about writing code; it was about chasing a feeling, a "vibe." The project is **ResilienceAI**, a completely private, offline-first AI wellness coach. The philosophy was **"vibe coding,"** and my primary tool was **Cursor**, an AI-first code editor.

This post is the story of that journey—how a simple idea evolved into a feature-rich application, the exciting technologies that powered it, and how an AI-driven workflow changed the way I build software.

## Chapter 1: The Spark - From Mock AI to a Real, Private LLM

Every project starts with a spark. For ResilienceAI, it was the vision of a safe space for mental wellness—a companion you could talk to without your data ever leaving your device.

Initially, the app was just a shell. The "AI" was a mock service that cycled through a few canned responses. It looked the part, but it lacked a soul. The first real challenge was to give it one. How could I run a powerful Language Model (LLM) entirely in the browser?

The answer was **WebLLM**.

This incredible library allows you to run full-fledged LLMs like Llama 3, Gemma 2, and Qwen 2 directly in the browser using WebAssembly and WebGPU. This was the breakthrough. With the help of my AI partner in Cursor, I began by gutting the mock service.

I prompted Cursor: *"Refactor my AI service to use the `@mlc-ai/web-llm` package. Create a new `AiCoachEnhancedService` that can load and manage multiple models."*

The result was amazing. Cursor helped me scaffold the new service, manage the complex state (model loading, progress, initialization), and even implement a `ModelSelector` component so users could choose the AI that best fit their needs. We even implemented **Constitutional AI**, a set of guiding principles injected into the prompt to ensure the AI remains safe, supportive, and focused on wellness. Privacy wasn't just a feature; it was the foundation.

## Chapter 2: Giving the AI a Face - The Leap to 3D Avatars

With a brain in place, ResilienceAI needed a face. The original avatar was a simple 2D drawing on an HTML canvas. It was functional but static and uninspired. It didn't have the "vibe" of an empathetic companion.

I wanted something more human, more expressive. I researched open-source avatar formats and landed on **VRM (Virtual Reality Model)**, the standard used by VTubers and metaverse applications.

This is where the project took a huge leap in complexity and excitement. The new tech stack for the avatar was:

*   **Three.js:** The cornerstone of 3D on the web.
*   **@pixiv/three-vrm:** A powerful library for loading and managing VRM models.

I described the vision to Cursor: *"Create a new Angular component called `VrmAvatar` that uses Three.js to render a VRM model. It needs real-time lip-syncing based on audio, natural eye blinking, and the ability to trigger facial expressions like 'happy' and 'surprised'."*

This was a masterclass in AI-assisted development. Together, we built a sophisticated 3D rendering component with features I thought would take weeks:

*   **Hardware-accelerated 3D rendering** with WebGL.
*   **Real-time lip-sync** that maps 14 different visemes (mouth shapes) to the Text-to-Speech audio stream.
*   **Natural animations** for blinking, head bobbing, and breathing to make the avatar feel alive.
*   A robust **AvatarSelector** component that allows users to browse built-in avatars or even upload their own `.vrm` files.

The result was a dynamic, expressive companion that brought ResilienceAI to life.

## Chapter 3: The "Vibe Coding" Philosophy with Cursor's Angular MCP

This project was my first real test of "vibe coding." It's a workflow where you focus on the *what* and the *why*, letting your tools handle the *how*. Instead of getting bogged down in boilerplate, syntax, or hunting for obscure APIs, I could stay in a creative flow, describing the desired outcome and letting my AI partner generate the code.

Cursor, with its deep integration of AI, was the perfect environment for this. What stood out, especially for this Angular project, were the **Angular MCP (Multi-Component Platform) tools**.

Whenever I hit a roadblock, I didn't have to leave my editor to search Stack Overflow. I could just ask.

*   When I had complex UI bugs, I could feed it a screenshot and say, *"Fix the responsiveness on this page."*
*   When I decided to centralize all settings, I said, *"Create a new `SettingsService` to manage app, AI, and audio settings, and refactor the `SettingsPage` to use it."*
*   When the build system threw cryptic errors after I botched a manual edit to `angular.json`, Cursor identified the corruption and helped me restore it.

This workflow is a partnership. I was the architect with the vision; Cursor was the master builder who knew the intricate details of Angular's dependency injection, RxJS, and component lifecycle. It allowed me to build with momentum and focus on what truly mattered: the user experience.

## Conclusion: What I Learned

Building ResilienceAI was an incredible learning experience. It solidified my belief in a few key things:

1.  **The Future is Private AI:** We no longer need to send user data to the cloud for every AI interaction. Libraries like WebLLM are democratizing access to powerful models that run anywhere.
2.  **The Web is a 3D Canvas:** With tools like Three.js, the line between native and web applications is blurring. Creating rich, interactive 3D experiences is more accessible than ever.
3.  **AI-Assisted Development is a Game-Changer:** "Vibe coding" is real. By offloading the cognitive overhead of boilerplate and syntax to an AI partner, we can build more creatively and efficiently than ever before.

This project started as a simple idea and blossomed into something I'm truly proud of. It's a testament to the power of a clear vision combined with the incredible leverage that modern development tools provide.

---

### Technical Stack Summary

*   **Framework:** Angular 18
*   **AI/LLM:** WebLLM (@mlc-ai/web-llm)
*   **3D Rendering:** Three.js
*   **Avatar Format:** VRM (@pixiv/three-vrm)
*   **UI/Styling:** SCSS, Glassmorphism
*   **State Management:** RxJS, Angular Services
*   **Code Editor:** Cursor (with Angular MCP) 