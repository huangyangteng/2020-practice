import './App.css';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./views/celt/home/Home";
import Farm from "./views/celt/farm/Farm";
function App() {
    return (
        <Router>
            <div className="App">
                <nav>nav</nav>
                <Switch>
                    <Route path={"/farm"} component={Farm} />
                    <Route path={"/"} component={Home}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
