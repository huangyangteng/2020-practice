import React from 'react';
import Query from './Query.js'
import List from './List.js'
import axios from 'axios'

class QueryList extends React.Component{
  constructor(props){
      super(props)
      this.state={ 
        list:[]
      }
  }
  componentDidMount(){
    this.getList()
  }
  async getList(id=-1){
    const res=await axios.request({
      method:'get',
      url:'http://111.229.14.189/gk-api/util/list',
      params:{
        id:id
      }
    })
    this.setState({list:res.data})
  }
  handleQuery=(value)=>{
   this.getList(value)
  }
  render(){
    return (
      <div className="query-list" >
        <Query onQuery={this.handleQuery}></Query>
        <List list={this.state.list}></List>
      </div>
    );  
  }

}


export default QueryList;
