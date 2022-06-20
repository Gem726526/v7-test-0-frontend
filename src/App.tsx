import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Navbar from "./components/navbar.component";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { UserLogin, UserLogout } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  const user = localStorage.getItem('user')
  const accessToken = localStorage.getItem('accessToken')


  useEffect(() => {
    if (user && accessToken) {
      dispatch(UserLogin({ accessToken, user }))
    } else {
      dispatch(UserLogout())
    }
  }, [user, accessToken])

  return (

    <div>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </div>
  );
}

export default App;