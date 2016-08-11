import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '../../Store.js'
import App from './App'
import Immutable from 'Immutable'
import { RECEIVE_PLANET, LISTEN_FOR_PLANET } from '../../constants/ActionTypes'
import { fetchSith, listenForPlanets, receivePlanet } from '../../actions'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

//id: 1,
//name: 'Darth Sidious',
//homeworld: {
	//id: 18,
	//name: 'Tatooine'
//},
//master: 2350,
//apprentice: 1489,

const initialState = {
    sith_state: {
        //fetchingIds: [{id: 3500, index:0}],
        fetching: [],
        siths: [{}, {}, {}, {}, {}],
        //fetchableIndexes: [],
		loadedSithCount: 0,
        currentPlanet: {
            name: 'Tatooine',
            id: 0
        }
    },
    //reachedTop: false,
    //reachedBottom: false
};


const store = configureStore(initialState)

store.dispatch(fetchSith({
    id: 3616,
    index: 0
}))
store.dispatch(listenForPlanets());


export class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <App />
                </Provider>
            </div>
        )
    }
}
