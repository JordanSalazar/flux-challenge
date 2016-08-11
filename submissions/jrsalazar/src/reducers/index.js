import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes.js'

function siths(state = {}, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_SITHS:
            return Object.assign({}, state, {
                siths: action.siths
            })
        case ActionTypes.RECEIVE_SITH:
            return Object.assign({}, state, {
                siths: [
                    ...state.siths.slice(0, action.index),
                    action.sith,
                    ...state.siths.slice(action.index + 1)
                ],
                reachedTop: action.reachedTop,
                reachedBottom: action.reachedBottom
            })
        case ActionTypes.RECEIVE_PLANET:
            return Object.assign({}, state, {
                currentPlanet: action.planet,
                siths: action.siths,
                planetMatched: action.planetMatched
            })
        case ActionTypes.LISTEN_FOR_PLANET:
        case ActionTypes.FETCH_SITH_SUCCESS:
        case ActionTypes.FETCH_SITH:
        default: return state
    }
}

var compareHomePlanets = (state, planet) => {
    let planetMatched = false;
    let matchedSiths = state.siths.map(sith => {
        sith.color = false;
        if (sith.homeworld && sith.homeworld.id === planet.id) {
            sith.color = true
            planetMatched = true
        }
        return sith;
    })

    return {
        planet: planet,
        matchedSiths: matchedSiths,
        planetMatched: 
    }
    dispatch(receivePlanet(planet, matchedSiths, planetMatched))
}

const rootReducer = combineReducers({
    sith_state: siths
})

export default rootReducer
