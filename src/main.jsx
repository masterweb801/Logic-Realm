import { createRoot } from 'react-dom/client'
import Loading from './component/Loading/Loading';
import { lazy, StrictMode, Suspense } from 'react';

const App = lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </StrictMode>,
)
