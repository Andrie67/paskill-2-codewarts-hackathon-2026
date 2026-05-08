---
name: temporary-mock-storage
description: Implements a temporary data storage mechanism to persist inputted data during the application's lifecycle without needing a backend.
---

# Temporary Mock Storage

This skill provides patterns for storing data temporarily during the app's lifetime. It's ideal for prototypes, demos, and MVPs.

## Implementation Guidelines

1. **Choose the Right Storage Level:**
   - **In-Memory (State Management):** Use React Context, Zustand, or simple state variables for data that only needs to live until a page refresh.
   - **SessionStorage:** Use the browser's `sessionStorage` API for data that should persist across page reloads but clear when the browser tab closes.
   - **LocalStorage:** Use the browser's `localStorage` API for data that needs to survive tab closures but is still local to the browser.

2. **Create a Storage Service Abstraction:**
   - Do not use `localStorage.getItem` or `setItem` directly in UI components.
   - Abstract the logic into a reusable hook or service (e.g., `useMockDatabase` or `StorageService`).
   - Implement `get`, `set`, `list`, `update`, and `delete` methods to simulate a real database.

3. **Data Serialization:**
   - Remember to use `JSON.stringify()` when saving data and `JSON.parse()` when retrieving.
   - Handle errors gracefully if the data in storage is corrupted or missing.
