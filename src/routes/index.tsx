import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthContext } from '../context';
import { Home, Login, SignUp } from '../pages';
import { ProtectedRoute } from './Protected';
import { SignedRoute } from './Signed';

export function Router() {
  const { signed } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute signed={signed} />,
      children: [
        {
          path: '',
          element: <Home />,
        },
      ],
    },
    {
      path: '/auth',
      element: <SignedRoute signed={signed} />,
      children: [
        {
          path: 'sign-in',
          element: <Login />,
        },
        {
          path: 'sign-up',
          element: <SignUp />,
        },
      ],
    },
    {
      path: '*',
      element: <div>Page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
