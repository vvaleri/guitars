import { HashRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Products, Cart } from './components';

export const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  </HashRouter>
);
