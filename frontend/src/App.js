import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewArticle from "./components/NewArticle";
import Article from "./components/Article";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";
import "./App.css";
// import Login from "./components/Login";

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

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
        const userRes = await axios.get("s/users/", {
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
    <Router>
      <NavBar />
      <div id="page-body">
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/articles">
            <Articles />
          </Route>

          <Route path="/new-article">
            <NewArticle />
          </Route>
          {/* <Route path="/article/:id" component={Article} exact /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
