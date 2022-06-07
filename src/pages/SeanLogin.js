import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/Context/AuthProvider";

const SeanLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signIn } = useAuth();

  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Calls `signIn` function from the context
    const { error } = await signIn({ email, password });

    if (error) {
      alert("error signing in");
    } else {
      // Redirect user to Dashboard
      history("/seanDashboard");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/seanSignup">Sign Up</Link>
      </p>
    </>
  );
};

export default SeanLogin;
