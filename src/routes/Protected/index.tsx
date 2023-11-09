import { Navigate, Outlet } from 'react-router-dom';
import { Layout } from '../../pages';

interface ProtectedRouteProps {
  signed: boolean;
}

export function ProtectedRoute({ signed }: ProtectedRouteProps) {
  if (!signed) return <Navigate to='/login' />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
