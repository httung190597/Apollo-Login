
import './App.css';
import Login from './components/Login/index';
import PrivatePage from './components/PrivatePage/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import {LandingPageRoute} from './components/LandingPageRoute';
import { ApolloProvider,ApolloClient,InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://10.1.16.186:8080/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <LandingPageRoute exact path="/" component={Login} />
          <PrivateRoute exact path="/private" component={PrivatePage} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;