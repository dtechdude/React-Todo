import React from "react";
import { Link } from "react-router-dom";

// we are using a functional component for header because it dosent need a state.
// in class based component  we have other lifecycle methods like component did mount
// with functional component it is one return that renders
function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      {/* how to add links in react */}
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Header;
