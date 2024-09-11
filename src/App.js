// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Jobs from "./components/Jobs/Jobs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import JobDetails from "./components/JobDetails/JobDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/job/:id" element={<JobDetails />} />
          </Routes>
        </div>
        <nav className="bottom-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            end
          >
            Jobs
          </NavLink>
          <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Bookmarks
          </NavLink>
        </nav>
      </div>
    </Router>
  );
};

export default App;
