import React from 'react';
import HomePage from './components/home.page';
import Navbar from './components/navbar.component';
import Footer from './components/footer.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/about.component';

function App() {
  return (
    <Router>
      <div className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh'
        }}
      >
      <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={About}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
