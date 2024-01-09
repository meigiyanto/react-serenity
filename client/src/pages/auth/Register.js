import { Link } from 'react-router-dom';
// import { useAuth } from "./../../provider/AuthProvider";

function Register() {
	/*
	const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken("this is a test token");
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogin();
  }, 3 * 1000);
	*/

	return (
	  <main id="main">

	    <section id="register" className="register py-5">
	      <div className="container" data-aos="fade-up">
	      	<form className="form-register">
	      	  <div className="form-group mb-3">
	      	    <label
	      	    	id="username"
	      	    	className="form-label"
	      	    >Username</label>
	      	    <input
	      	    	type="text"
	      	    	className="form-control"
	      	    	name="username"
	      	    	placehoder="Username"
	      	    />
	      	  </div>

	      	  <div className="form-group mb-3">
	      	    <label
	      	    	id="email"
	      	    	className="form-label"
	      	    >Email</label>
	      	    <input
	      	    	type="email"
	      	    	className="form-control"
	      	    	name="email"
	      	    	placehoder="Email"
	      	    />
	      	  </div>

	      	  <div className="form-group mb-3">
	      	    <label
	      	    	id="password"
	      	    	className="form-label"
	      	    >Password</label>
	      	    <input
	      	    	type="password"
	      	    	className="form-control"
	      	    	name="password"
	      	    	placehoder="Password"
	      	    />
	      	  </div>

	      	  <div className="form-group mb-3">
	      	    <label
	      	    	id="pass_repeat"
	      	    	className="form-label"
	      	    >Repeat Password</label>
	      	    <input
	      	    	type="password"
	      	    	className="form-control"
	      	    	name="pass_repeat"
	      	    	placehoder="Repeat Password"
	      	    />
	      	  </div>

					  <div className="form-check mb-3">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
							/>
							<label className="form-check-label">Agree</label>
					  </div>

	      	  <button
	      	  	type="submit"
	      	  	className="btn btn-dark"
	      	  >Sign Up</button>
	      	</form>

	      	<p className="text-center mt-3">
	      		<Link to="/login">Already have an account?</Link>
	      	</p>
	      </div>
	    </section>

	  </main>
	)
}

export default Register;
