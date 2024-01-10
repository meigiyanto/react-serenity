import { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Dashboard = () => {
	const {currentUser} = useContext(AuthContext);
  return (
      <h3>Welcome </h3>
  );
};

export default Dashboard;
