import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "light",
    };
  }
  togglemode = () => {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark",
      });
      document.body.style.backgroundColor = "#434550bd";
    } else {
      this.setState({
        mode: "light",
      });
      document.body.style.backgroundColor = "white";
    }
  };

  render() {
    return (
      <>
        <Router>
          <Navbar mode={this.state.mode} togglemode={this.togglemode}></Navbar>
          <Routes>
            <Route
              path="/"
              element={<News key="general" country="in" category="general" />}
            />
            <Route
              path="/health"
              element={<News key="health" country="in" category="health" />}
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News key="bussiness" country="in" category="business" />
              }
            />
            <Route
              path="/sports"
              element={<News key="sports" country="in" category="sports" />}
            />
            <Route
              path="/technology"
              element={
                <News key="technology" country="in" category="technology" />
              }
            />
            <Route
              path="/science"
              element={<News key="science" country="in" category="science" />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}
