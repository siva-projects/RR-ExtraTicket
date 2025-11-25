import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { authMiddleware } from '../middleware/auth.js'
import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Lazy load pages
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const LandingPage = lazy(() => import('./pages/landingPage.jsx').then(module => ({ default: module.LandingPage })));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      // using loader to replicate middleware functionality
      loader: authMiddleware,
      children: [
        { index: true, element: <Suspense fallback={<Loading />}><LandingPage /></Suspense> },
        { path: "Home", element: <Suspense fallback={<Loading />}><Home /></Suspense>, loader: authMiddleware, },
        { path: "About", element: <Suspense fallback={<Loading />}><About /></Suspense>, loader: authMiddleware, },
        { path: "Contact", element: <Suspense fallback={<Loading />}><Contact /></Suspense>, loader: authMiddleware, },
        { path: "Products", element: <Suspense fallback={<Loading />}><Products /></Suspense>, loader: authMiddleware, },
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
