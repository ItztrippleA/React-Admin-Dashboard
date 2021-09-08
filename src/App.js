import SideBar from "./components/sideBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topBar/Topbar";
import "./app.css";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
