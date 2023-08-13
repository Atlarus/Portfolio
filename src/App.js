import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import MaintenancePage from './components/Maintenance';

const App = () => {
  return (
      <div className="app">
        <MaintenancePage />
{/*         <Header />
        <Home /> */}
      </div>
  );
};

export default App;