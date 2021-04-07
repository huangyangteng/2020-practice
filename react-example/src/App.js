import './App.css';
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import Query from './components/Query'
import LifeCycle from './components/LifeCycle';
import ConditionRender from './components/ConditionRender'
function callback(){
  alert('callback')
}
function queryData(e){
  console.log(e.target.value)

}

function show(flag){
  if(flag){
    return {display:'block'}
  }else{
    return {display:'none'}
  }

}
function App() {
  const show=false
  return (
    <div className="App">
        <FunctionalComponent  name="hello" propA="propA" propB={callback}></FunctionalComponent>
        <Query  callback={queryData}></Query>
        <ClassComponent  name="hello" ></ClassComponent>
        <LifeCycle ></LifeCycle>
        <ConditionRender></ConditionRender>
    </div>
  );
}

export default App;
