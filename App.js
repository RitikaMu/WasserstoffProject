import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Statistics from './pages/statistics';
import Overview from './pages/overview';
import Dashboard from './pages/dashboard';
import Analytics from './pages/analytics';
import MyMap from './components/MyMap';
import './App.css';


function App() {
  return (
  <> 
  <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Statistics} />
        <Route path='/' exact component={Overview} />
        <Route path='/' exact component={Dashboard} />
        <Route path='/' exact component={Analytics} />
      </Routes>
    </Router>
    < MyMap />;
    </> 
  );
  
}

export default App;
