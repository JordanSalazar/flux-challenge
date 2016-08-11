import fetch from 'isomorphic-fetch'
import {
    BUTTON_UP,
    BUTTON_DOWN,
    RECEIVE_PLANET,
    FETCH_SITH_FAILURE,
    FETCH_SITH_SUCCESS,
    FETCH_SITH_SENT,
    CANCEL_FETCH,
    RECEIVE_SITH,
    UPDATE_SITHS,
    LISTEN_FOR_PLANET
} from '../constants/ActionTypes.js'

export function buttonUp()  {
    return (dispatch, getState) => {
        const { sith_state: state } = getState()

        const last_siths = state.siths

        const siths = [
            {},
            {},
            ...last_siths.slice(0, 3)
        ]

        const fetchable = {
            id: last_siths[0].master.id,
            index: 1
        }

        dispatch(fetchSith(fetchable))
        dispatch(updateSiths(siths))

    }
}

export function buttonDown(e)  {
    return (dispatch, getState) => {
        const { sith_state: state } = getState()
        const old_siths = state.siths

        const newSiths = [
            ...old_siths.slice(-3),
            {},
            {}
        ]

        const fetchable = {
            id: old_siths[3].apprentice.id,
            index: 3
        }

        dispatch(fetchSith(fetchable))
        dispatch(updateSiths(newSiths))
    }
}

export function cancelFetch(request)  {
    return {
        type: CANCEL_FETCH,
        request: request,
        fetchCanceled: true
    }
}

export function fetchSithSent(request)  {
    return {
        type: FETCH_SITH_SENT,
        request: request,
        fetching: true
    }
}

export function fetchSithFailure(response)  {
    return {
        type: FETCH_SITH_FAILURE,
        response: response
    }
}

export function fetchSithSuccess(sith, fetchObj)  {
    return (dispatch, getState) => {
        const { sith_state: state } = getState()
        const fetchCanceled = state.fetchCanceled

        if (fetchCanceled) return

        let siths = state.siths
        let topNeighbour = siths[fetchObj.index - 1]
        let bottomNeighbour = siths[fetchObj.index + 1]
        let reachedBottom = sith.apprentice.id === null ? true : false
        let reachedTop = sith.master.id === null ? true : false

        if (topNeighbour) {
            if (!topNeighbour.id && sith.master.id) {
                dispatch(fetchSith({
                    id: sith.master.id,
                    index: fetchObj.index - 1
                }))

            }
        } 

        if (bottomNeighbour) {
            if (!bottomNeighbour.id && sith.apprentice.id) {
                dispatch(fetchSith({
                    id: sith.apprentice.id,
                    index: fetchObj.index + 1
                }))

            }
        }

        dispatch(receiveSith(sith, fetchObj.index, reachedTop, reachedBottom))

    }
}

export function fetchSith(fetchObj) {
    // @TODO change fetch to xmlhttpreq and add to state.fetching
    // @TODO dispatch sent action
    const fetchUrl = 'http://localhost:3000/dark-jedis/' + fetchObj.id

    return (dispatch, getState) => {
        const { sith_state: state } = getState()
        const canceled = getState().sith_state.fetchCanceled

        fetch(fetchUrl)
            .then(resp => resp.json())
            .then(data => dispatch(fetchSithSuccess(data, fetchObj)))
            .catch(err => dispatch(fetchSithFailure(err.message)))
    }
}

export function receiveSith(sith, index, reachedTop, reachedBottom) {
    return {
        type: RECEIVE_SITH,
        sith: sith,
        index: index,
        reachedTop: reachedTop,
        reachedBottom: reachedBottom,
    }
}

export function updateSiths(siths) {
    return {
        type: UPDATE_SITHS,
        siths: siths
    }
}

export function receivePlanet(planet, siths, planetMatched) {
    return {
        type: RECEIVE_PLANET,
        planet: planet,
        siths: siths,
        planetMatched: planetMatched
    }
}

export function listenForPlanets() {
    return dispatch => {
        
        const socket = new WebSocket('ws://localhost:4000')

        socket.onmessage = (message) => dispatch(compareHomePlanets(JSON.parse(message.data)))
    }
}
