import './App.less';
import {Switch, HashRouter as Router, Route} from "react-router-dom";
import Celt from "./modules/celt/Celt";
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path={"/"} component={Celt}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
