import React from 'react'
import './App.css'
// import QueryList from './query-list/QueryList';
// import QueryListHook from './query-list-hook/QueryListHook'
// import JkHook from './jk-hook/JkHook'
import { ReduxDemo } from './redux-demo/redux-demo'
function App() {
    return (
        <div className="App">
            {/* <JkHook></JkHook> */}
            <ReduxDemo></ReduxDemo>
           {/* <QueryList></QueryList>
           <QueryListHook></QueryListHook> */}
           
        </div>
    )
}

export default App
