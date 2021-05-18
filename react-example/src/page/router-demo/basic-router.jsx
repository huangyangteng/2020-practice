import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const marR={
    marginRight:'10px'
}
export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link style={marR} to="/">Home</Link>
                    <Link style={marR} to="/about">About</Link>
                    <Link to="/users">Users</Link>
                </nav>
                <section>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
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
