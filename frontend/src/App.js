import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewArticle from "./components/NewArticle";
import Article from "./components/Article";
import Login from "./components/Login";
import Register from "./components/Register";
import UserContext from "./components/userContext";
import "./App.css";
// import Login from "./components/Login";

function App() {
  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  return (
    <Router>
      <NavBar />
      <UserContext.Provider value={{ userData, setUserData }}>
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
      </UserContext.Provider>
    </Router>
  );
}

export default App;
