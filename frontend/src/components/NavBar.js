import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    // <nav className="navbar bg-dark container">
    //   <h4>
    //     <Link to="/">Home</Link>
    //   </h4>
    //   <h4>
    //     <Link to="/notes">Notes</Link>
    //   </h4>
    //   <h4>
    //     <Link to="/create">Create Note</Link>
    //   </h4>
    // </nav>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">WriteUP</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/new-article">New Article</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
