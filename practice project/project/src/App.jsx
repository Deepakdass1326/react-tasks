import React from "react";
import Nav from "./assets/components/Nav";
import Body from "./assets/components/Body";

const App = () => {
  return (
    <div>
      <Body bgImg="https://images.unsplash.com/photo-1608132055071-aea9bf8e121e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <Nav logo="Senta " links={["Home", "About", "Contact"]} />
      </Body>
    </div>
  );
};

export default App;
