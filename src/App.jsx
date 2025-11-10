import './css/App.css'
import './css/colors.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Softwares from './pages/Softwares';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/404';
import AppLandingPage from './pages/AppLandingPage';
import { useState } from 'react';

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