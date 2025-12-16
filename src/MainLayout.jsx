import { Suspense, lazy } from 'react';
import Loading from './component/Loading/Loading';

const Layout = lazy(() => import('./Layout'));

const MainLayout = () => {
    return <Suspense fallback={<Loading />}>
        <Layout />
    </Suspense>;
}

export default MainLayout