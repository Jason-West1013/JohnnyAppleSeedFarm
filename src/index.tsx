import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.PureComponent {
    render() {
        return <h1>Test run</h1>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);