import "./App.css";

// import React, { Component } from "react";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Home from "./components/Home";

console.log(process.env.REACT_APP_NEWS_API);

// export default class App extends Component {
const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API;
  console.log(process.env.REACT_APP_NEWS_API);
  // const apiKey = "e61a602a6328425aacc5b569fabe6ad3";

  // state = {
  //   progress: 0,
  // };

  const [progress, setProgress] = useState(0);

  // setProgress = (progress) => {
  //   this.setState({ progress: progress });
  // };
  // render() {
  //
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        {/* loading bar is the react npm package */}
        <Routes>
          <Route path="/NewsInsights" element={<Home />} />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
        </Routes>

        {/* <News pageSize = {pageSize} country = "in" category= "sports"/> */}
      </div>
    </BrowserRouter>
  );
  // }
};
export default App;
