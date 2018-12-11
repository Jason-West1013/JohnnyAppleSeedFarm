import React from "react";
import { connect } from "react-redux";
import Main from "./components/main";

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default connect()(App);
