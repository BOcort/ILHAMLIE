import { Outlet,Navigate } from 'react-router-dom'
import RouteLayout from '../layout/RouteLayout'
import Auth from '../util/auth/auth'
export default function Protech() {
  if (!Auth.isAuthenticated()) {
    return (
      <RouteLayout>
        <Outlet />
      </RouteLayout>
    );
  }

  // Redirect to home page
  return <Navigate to="/" />;
}
