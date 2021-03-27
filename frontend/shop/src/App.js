import Header from "./components/header/header";
import {Route, withRouter} from "react-router-dom";

import Welcome from "./pages/welcome/welcome";
import Register from "./pages/register/register";
import Login from "./pages/login/login";


function App(props) {
  return (
    <div>
      {props.location.pathname === "/"? null : <Header/>}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </div>
  );
}

export default withRouter(App);
