import React from "react";
import ReactDOM from "react-dom";
//import { createBrowserHistory } from 'history';
import indexRoutes from "./routes/index.jsx";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Login from "../src/views/login.jsx";
import Register from "../src/views/register.jsx";
import "./assets/scss/style.css";

//const hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
