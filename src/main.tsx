import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/styles/index.css'

import { App } from './App'

import { GlobalProvider } from './providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
)
