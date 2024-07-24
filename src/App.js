import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import PropsApp from './Props/App';
import ContextApp from './Context/App';
import RegistrationClassApp from './RegistrationClass/App';
import RegistrationFunctionApp from './RegistrationFunction/App';
import LoginWithRefApp from './LoginWithRef/App';
import TitleFirstTimeApp from './TitleFirstTime/App';
import TitleEveryRenderApp from './TitleEveryRender/App';
import TitleOnDChangeApp from './TitleOnDChange/App';

function App() {
  return (
    <Router>
      <div className="nav">
        <ul>
          <li><Link to="/props">Props Example</Link></li>
          <li><Link to="/context">Context Example</Link></li>
          <li><Link to="/registration-class">Registration Class Component</Link></li>
          <li><Link to="/registration-function">Registration Function Component</Link></li>
          <li><Link to="/login-ref">Login with Ref</Link></li>
          <li><Link to="/title-first-time">Title First Time</Link></li>
          <li><Link to="/title-every-render">Title Every Render</Link></li>
          <li><Link to="/title-on-d-change">Title On D Change</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path="/props" component={PropsApp} />
        <Route path="/context" component={ContextApp} />
        <Route path="/registration-class" component={RegistrationClassApp} />
        <Route path="/registration-function" component={RegistrationFunctionApp} />
        <Route path="/login-ref" component={LoginWithRefApp} />
        <Route path="/title-first-time" component={TitleFirstTimeApp} />
        <Route path="/title-every-render" component={TitleEveryRenderApp} />
        <Route path="/title-on-d-change" component={TitleOnDChangeApp} />
      </Switch>
    </Router>
  );
}

export default App;