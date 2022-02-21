import {Route, Switch, Link, useRouteMatch} from "react-router-dom";
import Farm from "./pages/farm/Farm";
import Home from "./pages/home/Home";
import Docs from './pages/docs/Docs'
import News from './pages/news/News'
import styles from './celt.less'
console.log(styles)
export default function Celt() {
    let {path, url} = useRouteMatch()
    //INFO:path,和url默认为/，所以匹配时不加/  写成${url}farm  而不是  ${url}/farm
    return <section className={styles.celtWrapper}>
        <nav className={styles.celtNav}>
            <aside className={styles.left}></aside>
            <section >
                <Link to={`${url}`}>Home</Link>
                <Link to={`${url}farm`}>Farm</Link>
                <Link to={`${url}docs`}>Docs</Link>
                <Link to={`${url}news`}>News</Link>
            </section>
            <aside className={styles.right}></aside>

        </nav>
        <Switch className={styles.celtContent}>
            <Route exact path={path} component={Home}/>
            <Route  path={`${path}farm`} component={Farm}/>
            <Route  path={`${path}docs`} component={Docs}/>
            <Route  path={`${path}news`} component={News}/>
        </Switch>
    </section>
}