
import './App.css';
import Details from './components/Details';
import Home from './components/Home';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={"/home"} exact component={Home}/>
          <Route path={"/details"} exact component={Details} />
          <Redirect to={"/home"} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
