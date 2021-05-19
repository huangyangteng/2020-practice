import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom'

// routers, like <BrowserRouter> and <HashRouter>
// route matchers, like <Route> and <Switch>
// and navigation, like <Link>, <NavLink>, and <Redirect></Redirect>

const marR={
    marginRight:'10px'
}
export default function App() {
    return (
     
        <Router>
            <div>
                <h1>Basic Router</h1>
                <nav>
                    <Link style={marR} to="/">Home</Link>
                    <Link style={marR} to="/about">About</Link>
                    <Link  style={marR} to="/users">Users</Link>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    {/* <Redirect to="/users">Redirect user</Redirect> */}
                </nav>
                <section>
                  {/* Switch只展示匹配到的第一个 */}
                    <Switch>
                        {/* Route属性 path  component */}
                        <Route path="/about" component={About}></Route>
                       
                        <Route path="/users">
                            <Users />
                        </Route>
                        {/* /要放到最后 */}
                        <Route path="/">
                            <Home />
                        </Route>
                        
                    </Switch>
                </section>
            </div>
        </Router>
    )
}

function Home() {
    return <h2>Home</h2>
}

function About() {
    return <h2>About</h2>
}

function Users() {
    return <h2>Users</h2>
}
