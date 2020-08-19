import React from 'react';
import HomePage from './components/home.page';
import Navbar from './components/navbar.component';

function App() {
  return (
    <div className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
      }}
    >
      <Navbar />
      <HomePage />
      
    </div>
  );
}

export default App;
