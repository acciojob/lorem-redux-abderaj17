import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import Booklist from "./components/Booklist";

ReactDOM.render(
    <Provider store={store}>
        <Booklist />
    </Provider>,
    document.getElementById("root")
);