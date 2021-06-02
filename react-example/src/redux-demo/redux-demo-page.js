import store from './store/store'
import React from 'react'
import {Provider} from 'react-redux'
import { Counter } from './Counter'
import { Member } from './Member'
export default function ReduxDemoPage(){
    return <Provider store={store}>
        <section>
            <h1>react demo</h1>
            <Counter></Counter>
            <Member></Member>
        </section>
    </Provider>
}