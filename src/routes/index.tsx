import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthContext } from '../context';
import { Home, Login, SignUp } from '../pages';
import { ProtectedRoute } from './Protected';

export function Router() {
  const { signed } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute signed={signed} />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}
