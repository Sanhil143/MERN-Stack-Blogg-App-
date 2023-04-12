import { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";
// import setAuthToken from "./utils/setAuthToken";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Blogs from "./components/layout/blogs";
import HomePage from '../src/pages/HomePage'

import PrivateRoute from "./components/routing/PrivateRoute";

import "./App.css";
import Navbar from "./components/layout/navbar";
import CreateBlog from "./components/layout/createBlog";
import Dashboard from "./components/layout/dashboard";
import Logout from "./components/layout/logout";


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        {/* <Navbar /> */}
        <section>
          <Switch>
            {/* <Route exact path="/" component = {HomePage}/> */}
            {/* <Route exact path="/" component={Dashboard} /> */}
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/nav" component={Navbar} />
            <Route exact path="/" component={HomePage} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/blogs" component={Blogs} />
            <PrivateRoute exact path="/createBlog" component={CreateBlog} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </section>
      </Fragment>
    </Provider>
  );
}

export default App;
