import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import {
  FindProperty,
  Home,
  Login,
  Message,
  NotAuthorized,
  NotFound,
  Register,
} from '../pages';
import Details from '../pages/Details/Details';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import { Main } from '../layouts';
import {
  FinalSetup,
  KYC,
  PersonalInfo,
  Profile,
  Transaction,
} from '../pages/Register/Form';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
        children: [
          {
            path: '',
            element: <Home />,
          },
          { path: 'message', element: <Message /> },
          {
            path: 'property/find/',
            children: [
              {
                path: 'details/:id',
                element: <Details />,
              },
              {
                path: '',
                element: <FindProperty />,
              },
            ],
          },
        ],
      },
      {
        path: 'auth/',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: (
              <Navigate
                to="login"
                replace
              />
            ),
          },
          { path: 'login', element: <Login /> },
          {
            path: 'register/',
            element: <Register />,
            children: [
              {
                index: true,
                element: (
                  <Navigate
                    to="personal-info"
                    replace
                  />
                ),
              },
              { path: 'personal-info', element: <PersonalInfo /> },
              { path: 'review', element: <FinalSetup /> },
              { path: 'profile-setup', element: <Profile /> },
              { path: 'transaction', element: <Transaction /> },
              { path: 'kyc', element: <KYC /> },
            ],
          },
        ],
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
