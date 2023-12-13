import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  signed: boolean;
}

export function SignedRoute({ signed }: ProtectedRouteProps) {
  if (signed) return <Navigate to='/' />;

  return <Outlet />;
}
