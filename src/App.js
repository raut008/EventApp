import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from "./Store"
import HomePage from './Container/HomePage';
import EventDetailsPage from './Container/EventDetailsPage';
import FavouriteEvents from './Components/FavouriteEvents/FavouriteEvents'

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              exact={true}
              path="/"
              component={HomePage}
            />
            <Route
              exact={true}
              path="/eventDetails/:eventId"
              component={EventDetailsPage}
            />
            <Route
              exact={true}
              path="/favourite"
              component={FavouriteEvents}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
