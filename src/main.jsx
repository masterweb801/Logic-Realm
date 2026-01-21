import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import Loading from './component/Loading/Loading';
import { HelmetProvider } from 'react-helmet-async';

const App = lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Suspense>,
)
