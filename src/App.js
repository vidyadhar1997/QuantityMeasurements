import logo from './logo.svg';
import React from 'react';
import './App.css';
import{BrowserRouter as  Router,Switch,Route} from 'react-router-dom'
import Home from './component/Home/home';
import Temperature from './component/Home/Temperature/Temperature';
import Length from './component/Home/Length/Length';
import Volume from './component/Home/Volume/Volume';

function App() {
  return (
     <div>
      <Router>
        <Switch>
       <Route path="/" component={Home} exact={true}/>
       <Route path="/temperature" component={Temperature}/>
       <Route path="/length" component={Length}/>
       <Route path="/volume" component={Volume}/>
      </Switch>
      </Router>
     </div>
  );
}

export default App;
