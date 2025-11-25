import React, { useReducer } from "react";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  // const [data, setData] = useState(null);
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  console.log("isauthen", isAuthenticated);
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/data`)
  //     .then((res) => res.json()) // <-- Parse JSON here
  //     .then((json) => {
  //       setData(json);
  //       console.log("data", json); // Now logs the actual array
  //     });
  // }, []);
  return (
    <div>
      <h1>Home page</h1>
      <div>
        {isAuthenticated ? (
          <button
            onClick={() => {
              logout({
                logoutParams: {
                  returnTo: import.meta.env.VITE_REDIRECT_URI,
                },
              });
            }}
          >
            Log out
          </button>
        ) : (
          <button onClick={loginWithRedirect}>Log in</button>
        )}
      </div>
    </div>
  );
};

export default Home;
