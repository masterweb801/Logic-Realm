import './css/App.css';
import './css/colors.css';
import Layout from "./Layout";
import Home from './pages/Home';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const About = lazy(() => import('./pages/About'));
const ErrorPage = lazy(() => import('./pages/404'));
const Contact = lazy(() => import('./pages/Contact'));
const Softwares = lazy(() => import('./pages/Softwares'));
const AppLandingPage = lazy(() => import('./pages/AppLandingPage'));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "softwares", element: <Softwares /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "softwares/:slug", element: <AppLandingPage /> },
      { path: "*", element: <ErrorPage /> },
    ]
  }
]

export default function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />
}