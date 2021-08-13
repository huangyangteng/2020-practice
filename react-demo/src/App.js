import React from 'react'
import './App.css'
import QueryList from './query-list/QueryList';
import QueryListHook from './query-list-hook/QueryListHook'

function App() {
    return (
        <div className="App">
           <QueryList></QueryList>
           <QueryListHook></QueryListHook>
        </div>
    )
}

export default App
