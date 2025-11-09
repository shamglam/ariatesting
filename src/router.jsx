import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import RolesPage from './pages/RolesPage';
import ContentPage from './pages/ContentPage';
import PopoverPage from './pages/PopoverPage';
import LiveRegionsPage from './pages/LiveRegionPage';  
import TheRestPage from './pages/TheRestPage';
import FormsPage from './pages/FormsPage';
// Central data/router config (framework mode)
// Root route uses App which contains shared layout landmarks and <Outlet /> for children.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'roles',
        element: <RolesPage />
      },
        {
        path: 'popover',
        element: <PopoverPage />
      },
      {
        path: 'liveregions',
        element: <LiveRegionsPage></LiveRegionsPage>
      },
      {
        path: 'forms',
        element: <FormsPage />
      },
      {
        path: 'therest',
        element: <TheRestPage />
      },
      {
        path: 'content',
        element: <ContentPage />
      }

    ]
  }
], {
  basename: process.env.PUBLIC_URL || '/'
});

export default router;