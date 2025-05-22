import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.module.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/AppRouter.jsx';
import { StoreProvider } from './context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={routes} />
    </StoreProvider>
  </StrictMode>
);
