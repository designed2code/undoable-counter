# Undoable Counter (React)

A small React component that demonstrates **undo/redo** with a **history table**.  
Perfect for machine-coding rounds: state updates, immutable history, and UX polish.

## Features

- Counter starts at **0**
- Operations: **/2**, **-1**, **+1**, **x2**
- Each operation adds a **row to history** (operation, previous value, new value)
- **Undo** reverts the last action and updates the count
- **Redo** reapplies the last undone action
- Performing a **new operation clears the redo stack** (as in typical editors)
- **Reset** sets count to 0 and clears both history and redo stacks

## Tech

- React (Hooks, functional state updates)

## Getting Started

```bash
# with Vite
npm create vite@latest undoable-counter -- --template react
cd undoable-counter
npm install
```
