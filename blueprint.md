
# Blueprint: Game Coaching Website

## Overview

This document outlines the plan for creating a modern, single-page landing website for a game coaching service. The site will be built using HTML, CSS, and JavaScript, focusing on a visually appealing design, responsiveness, and user experience based on the initial `index.html` content.

## Project Outline: Style, Design, and Features

### 1. **Visual Design**
- **Aesthetics:** A "Bold" and modern design with a premium feel. The layout will be clean, visually balanced, and intuitive.
- **Color Palette:** A dark theme will be the primary choice, evoking a focused, gaming-centric atmosphere. Accent colors will be vibrant and energetic (e.g., electric blue, neon green, or sharp magenta) to highlight key information and interactive elements.
- **Typography:** We will use a modern, readable sans-serif font from a service like Google Fonts (e.g., 'Poppins' or 'Montserrat'). Font weights and sizes will be used strategically to create a clear visual hierarchy (Hero titles, section headlines, body text).
- **Background & Texture:** A subtle noise texture will be applied to the main background to add a tactile, premium feel.
- **Visual Effects:**
    - **Drop Shadows:** Multi-layered drop shadows will be used on elements like cards and buttons to create a sense of depth and make them appear "lifted" off the page.
    - **Glow Effects:** Interactive elements like buttons will have a subtle glow effect on hover to provide clear visual feedback.
- **Iconography:** Custom or library-based icons will be used to visually represent different coaching services and enhance navigation.

### 2. **Layout & Structure (Mobile-First & Responsive)**
- **Header:** A sticky navigation bar at the top with links that smoothly scroll to the corresponding sections of the page (`Home`, `Services`, `Pricing`, `Reviews`, `Contact`).
- **Hero Section:** A full-width, impactful introduction with a strong headline, a brief "hook" sentence, and a primary Call-to-Action (CTA) button (e.g., "상담 신청하기" - "Request a Consultation").
- **Services Section (`#services`):** Service offerings will be displayed in a card-based layout. Each card will feature an icon, a service title, a short description, and tags, consistent with the provided HTML.
- **Pricing Section (`#pricing`):** The pricing information will be presented in a clean, easy-to-read table. The design will highlight the value of each plan and guide the user towards a clear action.
- **Reviews Section (`#reviews`):** Testimonials will be displayed in a visually engaging format, such as a slider or individual styled quote blocks, to build trust.
- **Contact Section (`#contact`):** A dedicated section for users to get in touch, likely featuring a simple contact form or direct contact information.
- **Footer:** A simple footer containing copyright information and perhaps social media links.

### 3. **Interactivity & Features**
- **Smooth Scrolling:** Clicking navigation links will smoothly animate the scroll to the target section.
- **Hover Effects:** Interactive elements (buttons, links, cards) will have visual feedback on hover.
- **Web Components:** While not strictly necessary for this design, simple components (like a styled card or button) could be defined as Web Components for better encapsulation and reusability if the project were to scale.

## Current Action Plan

1.  **Analyze Existing Code:** Review the current `index.html`, `style.css`, and `main.js` to understand the starting point.
2.  **Restructure HTML:** Reorganize `index.html` into a more semantic structure with `<header>`, `<main>`, `<footer>`, and distinct `<section>` elements for each content block.
3.  **Develop New CSS:** Create a new `style.css` from scratch to implement the modern design described above. This will include the dark theme, color palette, typography, and responsive layouts using Flexbox and Grid.
4.  **Enhance JavaScript:** Update `main.js` to implement smooth scrolling and handle any other dynamic interactions.
5.  **Iterate and Refine:** Continuously check the browser preview for visual consistency, responsiveness, and errors, refining the code as needed.

