import logo from './logo.svg';
import React from 'react';
import './App.css';
import{BrowserRouter as  Router,Switch,Route} from 'react-router-dom'
import Home from './component/Home/home';


function App() {
  return (
     <div>
      <Router>
        <Switch>
       <Route path="/" component={Home}/>

        </Switch>
      </Router>
     </div>
  );
}

export default App;
