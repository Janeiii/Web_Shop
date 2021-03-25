import logo from './logo.svg';
import Header from "./components/header/header";
import {Route} from "react-router-dom";

import Register from "./pages/register";

function App() {
  return (
    <div>
      <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;
