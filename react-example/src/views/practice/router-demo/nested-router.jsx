import { BrowserRouter as Router, Switch, Route, Link,useRouteMatch,useParams } from 'react-router-dom'
const marR={
    marginRight:'10px'
}
export default function NestedRouter() {
    return (
        <Router>
            <div>
              <h1>nested router</h1>
                <nav>
                    <Link style={marR} to="/">Home</Link>
                    <Link style={marR} to="/about">About</Link>
                    <Link  style={marR} to="/users">Users</Link>
                    <Link to="/topics">Topics</Link>
                </nav>
                <section>
                    <Switch>
                        <Route path="/topics">
                            <Topics />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
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
function Topics() {
    let match = useRouteMatch();//{path,url,}
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
  
        {/* The Topics views has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" views for all topics, or
            the views that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
  }
  
function Topic() {
  let { topicId } = useParams();
  console.log("Topic -> useParams()", useParams())
  return <h3>Requested topic ID: {topicId}</h3>;
}
  