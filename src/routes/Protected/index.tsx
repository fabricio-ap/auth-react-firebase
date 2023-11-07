import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  signed: boolean;
}

export function ProtectedRoute({ signed }: ProtectedRouteProps) {
  if (!signed) return <Navigate to='/login' />;

  return <Outlet />;
}
