import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Products } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Products} />
      </Switch>
    </BrowserRouter>

  );
}

export { App };
