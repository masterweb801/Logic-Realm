import './css/App.css'
import './css/colors.css'
import Home from './pages/Home';
import { useState } from 'react';
import About from './pages/About';
import ErrorPage from './pages/404';
import MainLayout from './MainLayout';
import Contact from './pages/Contact';
import Softwares from './pages/Softwares';
import AppLandingPage from './pages/AppLandingPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [contextSoftwares, setContextSoftwares] = useState([])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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