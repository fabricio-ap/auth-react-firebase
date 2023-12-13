import { Navigate, Outlet } from 'react-router-dom';
import { Layout } from '../../components';

interface ProtectedRouteProps {
  signed: boolean;
}

export function ProtectedRoute({ signed }: ProtectedRouteProps) {
  if (!signed) return <Navigate to='/auth/sign-in' />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
