import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Products.jsx'
import { LandingPage } from './pages/landingPage.jsx'
import { authMiddleware } from '../middleware/auth.js'
import { Auth0Provider } from '@auth0/auth0-react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      // using loader to replicate middleware functionality
      loader: authMiddleware,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "Home", element: <Home />, loader: authMiddleware, },
        { path: "About", element: <About />, loader: authMiddleware, },
        { path: "Contact", element: <Contact />, loader: authMiddleware, },
        { path: "Products", element: <Products />, loader: authMiddleware, },
      ],
    },
  ]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_REDIRECT_URI
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
)
