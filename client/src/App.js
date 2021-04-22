// import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div id="app-content">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/" component={Saved} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;

