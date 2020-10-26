
import './App.css';
import Login from './components/Login/index';
import PrivatePage from './components/PrivatePage/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import {LandingPageRoute} from './components/LandingPageRoute';
function App() {
  return (

    <Router>
        <Switch>
            <LandingPageRoute exact path="/" component={Login} />
            <PrivateRoute exact path="/private" component={PrivatePage} />
            <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
    </Router>
  );
}

export default App;