import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthContext } from '../context';
import { Home, Login } from '../pages';
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
  ]);

  return <RouterProvider router={router} />;
}
