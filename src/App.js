import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Products, Cart } from './components';

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  </BrowserRouter>
);
