import React, { useEffect, useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import UserContext from "./userContext";
import axios from "axios";

function Home() {
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
      const checkLoggedIn = async () => {
        let token = localStorage.getItem("auth-token");
        if (token === null) {
          localStorage.setItem("auth-token", "");
          token = "";
        }
  
        const tokenResponse = await axios.post("/users/tokenIsValid", null, {
          headers: { "x-auth-token": token },
        });
        if (tokenResponse.data) {
          const userRes = await axios.get("/users/", {
            headers: { "x-auth-token": token },
          });
          setUserData({
            token,
            user: userRes.data,
          });
        }
      };
      checkLoggedIn();
    }, []);

  return (
    <div>
      {userData.user ? (
        <h1>Welcome {userData.user.displayName}</h1>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
export default Home;
