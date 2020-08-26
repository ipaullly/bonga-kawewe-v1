import React from 'react';
import HomePage from './components/home.page';
import Footer from './components/footer.component';
import {Store} from './context/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/about.component';

function App() {
  return (
    <Router>
      <Store>
        <div className="App"
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
          }}
        >
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={About}/>
          </Switch>
          <Footer />
        </div>
      </Store>
    </Router>
  );
}

export default App;
