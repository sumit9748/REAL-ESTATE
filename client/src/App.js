import { Buy } from "./page/buy/Buy";
import {Home} from "./page/home/Home"
import { Sell } from "./page/sell/Sell";
import { Flat } from "./page/Flat/Flat";
import {Login} from "./page/login/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
    <Router>
    <Switch>
    <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
    <Route exact path="/">
      {user?<Home />:"soory not allowed"}   
          </Route>
          <Route path="/buy">
            <Buy />
          </Route>
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/flat/:id">
            <Flat/>
          </Route>
          
   </Switch>
   </Router>
    </>
  )
}

export default App;
