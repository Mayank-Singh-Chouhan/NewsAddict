import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



export default class App extends Component {

  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar />

            <Routes>
              <Route path="/" exact element={<News key="sports" pageSize={8} country="in" category="sports" />} />
              <Route path="/business" exact element={<News key="business" pageSize={8} country="in" category="business" />} />
              <Route path="/entertainment" exact element={<News key="entertainment" pageSize={8} country="in" category="entertainment" />} />
              <Route path="/general" exact element={<News key="general" pageSize={8} country="in" category="general" />} />
              <Route path="/health" exact element={<News key="health" pageSize={8} country="in" category="health" />} />
              <Route path="/science" exact element={<News key="science" pageSize={8} country="in" category="science" />} />
              <Route path="/sports" exact element={<News key="sports" pageSize={8} country="in" category="sports" />} />
              <Route path="/technology" exact element={<News key="technology" pageSize={8} country="in" category="technology" />} />
            </Routes>

          </div>
        </Router>
      </>
    )
  }
}

