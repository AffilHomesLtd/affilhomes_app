import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, NotAuthorized, NotFound } from '../pages';
import Details from '../pages/Details/Details';
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
        path: 'details/:id',
        element: <Details />,
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
