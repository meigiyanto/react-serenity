import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [err, setErr] = useState(null);

	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await login(inputs);
			navigate('/dashboard');
		} catch(err) {
			console.log(err.response.data);
			setErr(err.response.data);
		}
	}

	return (
	  <main id="main">

	    <section id="login" className="login">
	      <div className="container">

	      	<form className="form-login">
	      	  <div className="form-group">
	      	    <label
	      	    	htmlFor="username"
	      	    	id="username"
	      	    	className="form-label"
	      	    >Username</label>
	      	    <input
	      	    	type="text"
	      	    	className="form-control"
	      	    	name="username"
	      	    	placehoder="Username"
	      	    	onChange={handleChange}
	      	    />
	      	  </div>

	      	  <div className="form-group my-3">
	      	    <label
	      	    	htmlFor="password"
	      	    	id="password"
	      	    	className="form-label"
	      	    >Password</label>
	      	    <input
	      	    	type="password"
	      	    	className="form-control"
	      	    	name="password"
	      	    	placehoder="Password"
	      	    	onChange={handleChange}
	      	    />
	      	  </div>

					  {/*<div className="form-check mb-3">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
								name="remember"
								id="flexCheckChecked"
							/>
							<label
								className="form-check-label"
								htmlFor="flexCheckChecked"
							>{" "}Remember me</label>
					  </div>*/}

	      	  <button
	      	  	type="submit"
	      	  	className="btn btn-dark"
	      	  	onClick={handleSubmit}
	      	  >Sign In</button>
	      	</form>

	      	<div>
		      	<p className="text-center mt-3">
		      		<Link to="/register">Already have an account?</Link>
		      	</p>
		      	<p className="text-center mt-3">
		      		<Link to="/forget-password">Forget Password</Link>
		      	</p>
	       	</div>

	      </div>
	    </section>

	  </main>
	)
}

export default Login;
