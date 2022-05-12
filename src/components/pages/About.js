import React from "react";

function About() {
  return (
    //   react fragment is like a ghost element. it dosent shoew up in the DOM
    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
    </React.Fragment>
  );
}

export default About;
