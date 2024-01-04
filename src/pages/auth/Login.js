import { useNavigate } from 'react-router-dom';
import { useAuth } from "./../../provider/AuthProvider";

function Login() {
	const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken("this is a test token");
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogin();
  }, 3 * 1000);

	return (
	  <main id="main">

	    <section id="login" className="py-5">
	      <div className="container">

	      	<form>
	      	  <div className="form-group">
	      	    <label htmlFor="username" id="username" className="form-label">Username</label>
	      	    <input type="text" className="form-control" name="username" placehoder="Username" />
	      	  </div>
	      	  
	      	  <div className="form-group my-3">
	      	    <label  htmlFor="password" id="password" className="form-label">Password</label>
	      	    <input type="password" className="form-control" name="password" placehoder="Password" />
	      	  </div>
	      	  
					  <div className="form-check mb-3">
							<input className="form-check-input" type="checkbox" value="" name="remember" id="flexCheckChecked" />
							<label className="form-check-label" htmlFor="flexCheckChecked">Remember me</label>
					  </div>
			      	  
	      	  <button type="submit" className="btn btn-dark">Sign In</button>
	      	</form>
	      	
	      	<div>
		      	<p className="text-center mt-3"><a href="register">Already have an account?</a></p>
		      	<p className="text-center mt-3"><a href="forget-password">Forget Password</a></p>
	       	</div>
	       	
	      </div>
	    </section>
	    
	  </main>
	)
}

export default Login;
