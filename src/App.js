import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./components/routing/PrivateRoute"
import PrivateScreen from "./components/screens/PrivateScreen"
import LoginScreen from "./components/screens/LoginScreen"
import RegisterScreen from "./components/screens/RegisterScreen"
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen"
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen"
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
        <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/forgotpassword" component={ForgotPasswordScreen} />
          <Route path="/passwordreset/:resetToken" component={ResetPasswordScreen} />
        </Switch>
      </div>
    </Router>
  )
}

export default App