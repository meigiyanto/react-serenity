import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

import Header from "./../components/Header";
import Footer from "./../components/Footer";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
  	<>
  		<Header />
  		<Outlet />
  		<Footer />
  	</>
  );
};
