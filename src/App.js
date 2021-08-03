import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import StudentList from "./Component/Student/StudentList";
import Info from "./Component/Info/Info";
function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/student" component={StudentList} />
          <Route path="/info" component={Info} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
