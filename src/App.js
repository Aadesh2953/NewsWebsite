import "./App.css";
import React, { Component, useState } from "react";
import { Navbar } from "./components/Navbar";
import NewsItem from "./components/NewsItem";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default function App(){
  const [progress,setprogress]=useState(0)
  //git hub  1
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
        color='red'
        progress={progress}       
      /> 
            {/* <div className='col-md-4'> */}
            <Routes>
              <Route
                path="/"
                //key force kare component ne rerender karva maate
                element={<NewsItem setprogress={setprogress}   pagesize={5}  key="general" category="general" />}
              ></Route>
              <Route
                path="/sports"
                
                element={<NewsItem setprogress={setprogress}   pagesize={5}  key="sports" category="sports" />}
              ></Route>
              <Route
                path="/entertainment"
                element={<NewsItem setprogress={setprogress}   pagesize={5}  key="entertainment"category="entertainment" />}
              ></Route>
              <Route
                path="/technology"
                element={<NewsItem setprogress={setprogress}   pagesize={5} key="technology"category="technology" />}
              ></Route>
              <Route
                path="/science"
                element={<NewsItem setprogress={setprogress}   pagesize={5}  key="science"category="science" />}
              ></Route>
              <Route
                path="/buisness"
                element={<NewsItem setprogress={setprogress}   pagesize={5}  key="buisness" category="buisness" />}
              ></Route>
              <Route
                path="/health"
                element={<NewsItem setprogress={setprogress}   pagesize={5}  key="health" category="health" />}
              ></Route>
              {/* <Route path="/entertainment" element={<NewsItem setprogress={setprogress}  progress={progress} pagesize={5} category={'general'} />}></Route> */}
            </Routes>
          
        </Router>
      </>
    );
}