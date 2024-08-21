import React from 'react'
import ReactDOM from 'react-dom/client'

import { Toaster } from "@/components/ui/sonner"

import '@/styles/index.css'

import { App } from './App'

import { GlobalProvider } from './providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />

      <Toaster />
    </GlobalProvider>
  </React.StrictMode>,
)
