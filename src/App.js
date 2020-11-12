import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from '@material-ui/core';
import SignInSide from './components/SignInSide.js';
import SignUp from './components/SignUp.js';

function App() {
  return (
    <div>
      <Router>
      <Link to='/signup'><Button>Register</Button></Link>
      <Link to='/signin'><Button>Sign-In</Button></Link>
      <Link to='/signin'><Button>Dashboard</Button></Link>
      
      <Switch>
        <Route path='/signin' component={SignInSide} />
        <Route path='/signup' component={SignUp} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
