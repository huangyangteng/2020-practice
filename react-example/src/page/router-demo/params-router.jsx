
import { BrowserRouter as Router, Switch, Route, Link, matchPath } from 'react-router-dom'


const marR={
    marginRight:'10px'
}
export default function ParamsRouter() {
    return (
     
        <Router>
            <div>
                <h1>Params Router</h1>
                <nav>
                    <Link style={marR} to="/contact">contact</Link>
                    <Link style={marR} to="/contact/jack">contact-jack</Link>
                    <Link style={marR} to="/contact/jerry">contact-Jerry</Link>
                </nav>
                <section>
                  {/* Switch只展示匹配到的第一个 */}
                    <Switch>
                        {/*写法1： Route属性 path  component */}
                        <Route path="/contact/:id" component={Contact}></Route>

                        {/*写法2： 这种写法没有把contact参数传入 */}
                        {/* <Route path="/contact/:id">
                            <Contact></Contact>
                        </Route> */}

                        <Route path="/contact">
                            <AllContacts />
                        </Route>

                        {/* exact 精准匹配 */}

                        {/* /必须放到最后 */}
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

function Contact({match}) {//match：{path:"/contact/:id",url:"/contact/jack",isExact:true,params:{id:jack}}
    console.log("Contact -> match", match)
    return <h2>Contact {match.params.id}</h2>
}

function AllContacts() {
    return <h2>All Contacts</h2>
}
