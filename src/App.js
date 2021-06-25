import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import LatestProjects from './components/Home/LatestProjects/LatestProjects';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManageService from './components/ManageService/ManageService/ManageService';
import ServiceList from './components/ServiceList/ServiceList/ServiceList';
import AboutUs from './components/Home/AboutUs/AboutUs';
import Footer from './components/Home/Footer/Footer';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/contactUs">
            <Footer />
          </Route>
          <Route path="/latestProjects">
            <LatestProjects />
          </Route>
          <PrivateRoute path="/manageService">
            <ManageService />
          </PrivateRoute>
          <PrivateRoute path="/service/:serviceId">
            <ServiceList />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
