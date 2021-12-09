import React from "react";
import useRoutePrivacy from "../../components/auth/useRoutePrivacy";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function Dashboard() {
  // useRoutePrivacy()
  const { isAuthenticated, user } = useAuth0;
  return (
    <>
      <h1>At Dashboard.</h1>
      <button
        onClick={() => {
          console.log(isAuthenticated);
          console.log(user);
        }}
      >
        Test Button
      </button>
    </>
  );
}

export default withAuthenticationRequired(Dashboard);
