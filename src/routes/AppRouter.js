import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "../components/NavBar";
import TodoActive from "../components/TodoActive";
import TodoAll from "../components/TodoAll";
import TodoCompleted from "../components/TodoCompleted";
import '../css/index.css';

export default function AppRouter() {
  return (
    <Router>

        <div className='container'>

            <NavBar />

            <Switch>
            <Route exact path="/" component={TodoAll}></Route>
            <Route exact path="/active" component={TodoActive}></Route>
            <Route exact path="/completed" component={TodoCompleted}></Route>
            </Switch>

        </div>
    </Router>
  );
}