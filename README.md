## PLACEMENT PROJECT FOR COLLEGE (React JS & Tailwindcss Installation Setup) : 
## STEP 1 : Installation of React/Vite 
npm create vite@latest

## STEP 2 : Run the React App
npm run dev

## STEP 3 : Install the Tailwindcss
npm install tailwindcss @tailwindcss/vite

## STEP 4 : Setup the vite.config.js Configuration : 

import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

Add the @tailwindcss/vite package

## STEP 5 : Add Tailwind to CSS : 
@import "tailwindcss"

## STEP 6 : Test Tailwindcss

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      <h1 className="text-white text-3xl font-bold">
        React + Tailwind CSS Setup 🎉
      </h1>
    </div>
  );
}

export default App;
