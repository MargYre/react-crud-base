# 🏗️ Modular CRUD Boilerplate

> **Framework:** Next.js 15 (App Router)  
> **Pattern:** Headless Logic + Atomic Components

---

## 🎯 Project Purpose

This is a **production-ready architecture** designed to be integrated into any React/Next.js environment. It serves as a reusable engine for list-based operations such as:

- 🛒 **E-commerce:** Shopping carts & inventories.
- ✅ **Task Management:** To-do lists & workflows.
- 👤 **User Management:** Admin dashboards & directories.

---

## 🛠️ Technical Architecture

### 🧠 1. Headless Logic (`/hooks`)

The core state management is isolated from the UI in a custom hook.

- **Separation of Concerns**: Business logic lives in `useItems.js`.
- **Plug & Play**: Use the logic with any UI library (Tailwind, Radix, etc.).
- **Unit Testable**: The "engine" can be validated independently of the DOM.

### 🧩 2. Atomic UI (`/components`)

Presentation components are stateless and highly modular.

- **`ItemForm`**: Specialized in capturing and validating new entries.
- **`ItemRow`**: Handles display, local "edit mode" state, and deletion triggers.
- **Prop-Driven**: Communication is handled via callbacks, ensuring zero-coupling.

### 🌐 3. Next.js 15 Implementation (`/app`)

- **Hydration Optimized**: Precise `"use client"` boundaries for maximum performance.
- **Pre-rendering**: Leverages Server Components for the initial structural load.

---

## 🚀 How to Reuse

# Install dependencies

npm install

# Run the development server

npm run dev
