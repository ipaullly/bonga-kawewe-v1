import React from 'react';
import HomePage from './components/home.page';
import Navbar from './components/navbar.component';
import Footer from './components/footer.component';

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
      <Footer />
    </div>
  );
}

export default App;
