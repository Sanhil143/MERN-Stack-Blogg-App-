import { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";
// import setAuthToken from "./utils/setAuthToken";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Blogs from "./components/layout/getAllBlogs";
import HomePage from '../src/pages/HomePage'

import PrivateRoute from "./components/routing/PrivateRoute";

import "./App.css";
import Navbar from "./components/layout/navbar";
import CreateBlog from "./components/layout/createBlog";
import Dashboard from "./components/layout/Dashboard";
import UpdateBlog from "./components/layout/updateBlog";
import DeleteBlog from "./components/layout/deleteBlog";
import GetUserBlogs from "./components/layout/getUserBlog";
import PrivateBlog from "./components/layout/privateAllBlog";


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
            <Route exact path="/blogs" component={Blogs} />
            <PrivateRoute exact path="/createBlog" component={CreateBlog} />
            <PrivateRoute exact path="/privateBlog" component={PrivateBlog} />
            <PrivateRoute exact path="/userBlog" component={GetUserBlogs} />
            <PrivateRoute exact path="/blogs/:blogId/update" component={UpdateBlog} />
            <PrivateRoute exact path="/blogs/:blogId/delete" component={DeleteBlog} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Provider>
  );
}

export default App;
