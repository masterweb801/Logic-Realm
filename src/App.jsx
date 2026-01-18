import './css/App.css';
import './css/colors.css';
import React from 'react';
import Layout from "./Layout";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        Component: React.lazy(() => import('./pages/Home')),
      },
      {
        path: "softwares",
        Component: React.lazy(() => import('./pages/Softwares')),
      },
      {
        path: "about",
        Component: React.lazy(() => import('./pages/About')),
      },
      {
        path: "contact",
        Component: React.lazy(() => import('./pages/Contact')),
      },
      {
        path: "softwares/:slug",
        Component: React.lazy(() => import('./pages/AppLandingPage')),
        getStaticPaths: () => [
          'softwares/dv-tube',
          'softwares/hified',
          'softwares/sayl',
          'softwares/asfa',
          'softwares/typo',
          'softwares/photo-point',
        ],
      },
      {
        path: "*",
        Component: React.lazy(() => import('./pages/404')),
      },
    ]
  }
]