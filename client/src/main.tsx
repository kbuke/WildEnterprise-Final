// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './router'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <RouterProvider 
//       router={router}
//     />
//   </StrictMode>,
// )

import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { queryClient } from "./ReactQuery/queryClient"
import { router } from "./router"
import './index.css'


createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </QueryClientProvider>
)
