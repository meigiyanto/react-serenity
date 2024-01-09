import { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import Welcome from "../../components/layouts/backend/Welcome";

const Dashboard = () => {
	const {currentUser} = useContext(AuthContext);
  return (
      <Welcome name={currentUser} />
  );
};

export default Dashboard;
