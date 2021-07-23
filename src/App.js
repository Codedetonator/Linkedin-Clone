/*eslint-disable*/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect, connrct } from "react-redux";
import { useEffect } from "react";
import { getUserAuth } from "./actions/index";
import Login from "./components/login";
import Home from "./components/home";
import Header from "./components/header";
function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
