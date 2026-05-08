---
name: app-simulator-walkthrough
description: Simulates user flows and provides an automated walkthrough of the application's key features to verify UI/UX and logic.
---

# App Simulator Walkthrough

This skill guides the agent to create interactive walkthroughs or simulate user behaviors to test the application's primary user flows.

## How to Use This Skill

1. **Browser Subagent Walkthrough:**
   - Use the `browser_subagent` tool to automatically open the local development server.
   - Provide a clear task for the subagent to click through the main screens (e.g., Login -> Dashboard -> Submit Form).
   - Use this to verify that the app connects correctly and that visual changes did not break the critical paths.

2. **In-App Interactive Walkthrough (Optional):**
   - Implement an onboarding library (like `intro.js` or a custom overlay).
   - Highlight key components to walk the user through the application dynamically.
