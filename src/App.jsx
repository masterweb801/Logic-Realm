import './css/App.css'
import './css/colors.css'
import Layout from "./Layout"
import { lazy, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ErrorPage = lazy(() => import('./pages/404'));
const Contact = lazy(() => import('./pages/Contact'));
const Softwares = lazy(() => import('./pages/Softwares'));
const AppLandingPage = lazy(() => import('./pages/AppLandingPage'));

function App() {
  const [contextSoftwares, setContextSoftwares] = useState([])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "softwares", element: <Softwares contextSoftwares={contextSoftwares} setContextSoftwares={setContextSoftwares} /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "softwares/:slug", element: <AppLandingPage /> },
        { path: "*", element: <ErrorPage /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App