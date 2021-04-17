import './App.css';
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import Query from './components/Query'
import LifeCycle from './components/LifeCycle';
import ConditionRender from './components/ConditionRender'
import List from './components/List'
function callback(){
  alert('callback')
}
function queryData(e){
  console.log(e.target.value)

}


function App() {
  return (
    <div className="App">
        <FunctionalComponent  name="hello" propA="propA" propB={callback}></FunctionalComponent>
        <Query  callback={queryData}></Query>
        <ClassComponent  name="hello" ></ClassComponent>
        <LifeCycle ></LifeCycle>
        <ConditionRender></ConditionRender>
        <List list={[{name:'xiaoming',age:11},{name:'xiaohong',age:12}]}></List>
    </div>
  );
}

export default App;