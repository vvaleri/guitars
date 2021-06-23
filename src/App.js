import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Home } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>

  );
}

export { App };
