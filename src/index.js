import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Import components from each task folder
import AppProps from './Props/App';
import AppContext from './Context/App';
import AppRegistrationClass from './RegistrationClass/App';
import AppRegistrationFunction from './RegistrationFunction/App';
import AppLoginWithRef from './LoginWithRef/App';
import AppTitleFirstTime from './TitleFirstTime/App';
import AppTitleEveryRender from './TitleEveryRender/App';
import AppTitleOnDChange from './TitleOnDChange/App';

// Render each component with appropriate styling
ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="task-section">
        <h2 className="task-heading">Task 1: Props - Passing User Details</h2>
        <AppProps />
        <hr className="task-hr" />
      </div>

      <div className="task-section">
        <h2 className="task-heading">Context - Registration Form using State</h2>
        <AppContext />
        <hr className="task-hr" />
      </div>

      <div className="task-section">
        <h2 className="task-heading">Task 2: Registration Class Component</h2>
        <AppRegistrationClass />
        <hr className="task-hr" />
      </div>

      <div className="task-section">
        <h2 className="task-heading">Registration Function Component</h2>
        <AppRegistrationFunction />
        <hr className="task-hr" />
      </div>

      <div className="task-section">
        <h2 className="task-heading">Task 3: Login Component using Ref</h2>
        <AppLoginWithRef />
        <hr className="task-hr" />
      </div>

      <div className="task-section">
        <h2 className="task-heading">Task 4: Update Page Title Based on Variable (First Time)</h2>
        <AppTitleFirstTime />
        <hr className="task-hr" />
      </div>

      <div className="task-section">
        <h2 className="task-heading">Update Page Title on Every Render</h2>
        <AppTitleEveryRender />
        <hr className="task-hr" />
      </div>

      <div className="task-section">
        <h2 className="task-heading">Update Page Title Only When Variable D Changes</h2>
        <AppTitleOnDChange />
        <hr className="task-hr" />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);