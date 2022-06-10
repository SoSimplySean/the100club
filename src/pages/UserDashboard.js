import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Context/AuthProvider";

const UserDashboard = () => {
  const { user, signOut } = useAuth();

  const history = useNavigate();

  async function handleSignOut() {
    // Ends user session
    await signOut();

    // Redirects the user to Login page
    history("/LogIn");
  }

  return (
    <div>
      <p>Welcome! {user.id}</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default UserDashboard;