import './App.css';
// import BasicRouter from './page/router-demo/basic-router';
// import NestedRouter from './page/router-demo/nested-router.jsx';
// import ParamsRouter from './page/router-demo/params-router';
// import ListenPage from './page/listen/listen.jsx'
// import ReduxDemoPage from './redux-demo/redux-demo-page';
// import FunctionalComponent from './components/FunctionalComponent'
// import ClassComponent from './components/ClassComponent'
// import Query from './components/Query'
// import LifeCycle from './components/LifeCycle';
// import ConditionRender from './components/ConditionRender'
// import List from './components/List'
// import User from './page/user/user';
import VideoPlayer from './components/VideoPlayer';



function App() {
  return (
    <div className="App">
        {/* <FunctionalComponent  name="hello" propA="propA" propB={callback}></FunctionalComponent>
        <Query  callback={queryData}></Query>
        <ClassComponent  name="hello" ></ClassComponent>
        <LifeCycle ></LifeCycle>
        <ConditionRender></ConditionRender>
        <List list={[{name:'xiaoming',age:11},{name:'xiaohong',age:12}]}></List> */}
        {/* <User></User> */}
        {/* <BasicRouter></BasicRouter> */}
        {/* <hr></hr> */}
        {/* <NestedRouter></NestedRouter> */}
        {/* <ParamsRouter></ParamsRouter> */}
        {/* <ListenPage></ListenPage> */}
        {/* <ReduxDemoPage></ReduxDemoPage> */}
        <VideoPlayer src="http://111.229.14.189/file/test.mp4"></VideoPlayer>
    </div>
  );
}

export default App;
