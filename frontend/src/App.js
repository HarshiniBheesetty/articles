import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewArticle from "./components/NewArticle";
import Article from "./components/Article";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div id="page-body">
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>

          <Route path="/articles">
            <Articles />
          </Route>

          <Route path="/new-article">
            <NewArticle />
          </Route>
          <Route path="/article/:id" component={Article} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
