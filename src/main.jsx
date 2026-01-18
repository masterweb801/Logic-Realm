import { routes } from './App.jsx'
import { ViteReactSSG } from 'vite-react-ssg';

export const createRoot = ViteReactSSG(
  {
    routes,
    renderAsync: true,
  }
)