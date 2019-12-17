import React from 'react';

import './App.css';


import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from './components/UserManagement/Login';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
    </Router>

  );
}
export default App;
