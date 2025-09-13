import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Products.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// ...existing code...
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App wraps all pages
    children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "Products", element: <Products /> },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
