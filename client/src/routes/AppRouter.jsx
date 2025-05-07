import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, NotAuthorized, NotFound } from '../pages';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'unauthorized',
        element: <NotAuthorized />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
