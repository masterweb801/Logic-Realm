import './css/App.css'
import './css/colors.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Softwares from './pages/Softwares';
import Support from './pages/Support';
import About from './pages/About';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "softwares", element: <Softwares /> },
        { path: "support", element: <Support /> },
        { path: "about", element: <About /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App