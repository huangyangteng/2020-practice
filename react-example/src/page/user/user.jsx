import React from 'react'
import List from './list'
import Query from './query'
import userStyle from './user.module.css'


function User(){
    const onQuery=(params)=>{
        console.log("onQuery -> params", params)
        console.log('on query')
    }
    return <section className={userStyle.userPage}>
        <Query onQuery={onQuery}></Query>
        <List></List>
        
    </section>
}
export default User