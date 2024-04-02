import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

import AuthProvider from './auth/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
