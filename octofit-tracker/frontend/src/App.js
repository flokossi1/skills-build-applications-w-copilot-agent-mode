import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import logo from './octofitapp-small.png';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="OctoFit Logo" /> OctoFit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link${location.pathname === '/activities' ? ' active' : ''}`} to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${location.pathname === '/leaderboard' ? ' active' : ''}`} to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${location.pathname === '/teams' ? ' active' : ''}`} to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${location.pathname === '/users' ? ' active' : ''}`} to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${location.pathname === '/workouts' ? ' active' : ''}`} to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={
          <div className="hero-section text-center">
            <div className="container">
              <img src={logo} alt="OctoFit Logo" className="hero-logo" />
              <h1 className="display-4 fw-bold">Welcome to OctoFit Tracker</h1>
              <p className="lead mt-3">Track your activities, compete on the leaderboard, and stay fit with your team!</p>
              <div className="mt-4">
                <Link to="/activities" className="btn btn-primary btn-lg me-2">View Activities</Link>
                <Link to="/leaderboard" className="btn btn-outline-light btn-lg">Leaderboard</Link>
              </div>
            </div>
          </div>
        } />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
