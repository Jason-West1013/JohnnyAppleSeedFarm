import React from "react";
import { connect } from "react-redux";
import Main from "./components/main";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const App = () => {
  return (
    <div>
      <button>Test Button</button>
      <Main />
    </div>
  );
};

export default connect(mapStateToProps)(App);
