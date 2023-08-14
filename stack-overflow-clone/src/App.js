import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import StackOverflow from './components/StackOverflow';
import Footer from './components/Footer/Footer';
import Question from './components/Add-Question/Question';
import {
  BrowserRouter as Router,Switch, Route
} from 'react-router-dom';
import Products from './components/Products/Products';
import About from './components/About/About';
import ForTeams from './components/ForTeams/ForTeams';
import Auth from './components/Auth';
import ViewQuestion from './components/ViewQuestion'


function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/" component={StackOverflow} />
          <Route exact path="/products" component={ Products} />
          <Route exact path="/about" component={About} />
          <Route exact path="/forteams" component={ForTeams} />
          <Route exact path="/add-question" component={Question} />
          <Route exact path="/question" component={ViewQuestion} />
        </Switch>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
