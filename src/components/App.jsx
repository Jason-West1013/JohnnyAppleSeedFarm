import React from "react";
import { connect } from "react-redux";
import Main from "./components/main";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default connect(mapStateToProps)(App);
