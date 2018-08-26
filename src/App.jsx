import React from "react";
import { connect } from "react-redux";
import Main from "./components/main";

const App = () => {
  return (
    <div>
      <button>Test Button</button>
      <Main />
    </div>
  );
};

export default connect()(App);
