import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async"
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import './index.css'
  
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
       <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)