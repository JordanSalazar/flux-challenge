import h from 'virtual-dom/h'
import diff from 'virtual-dom/diff'
import patch from 'virtual-dom/patch'
import createElement from 'virtual-dom/create-element'
import createRoot from './Root'
import { configureStore } from '../../Store.js'
import {
    fetchSith,
    listenForPlanets,
    receivePlanet,
    buttonUp,
    buttonDown
} from '../../actions'

const initialState = {
    sith_state: {
        fetching: [],
        siths: [{}, {}, {}, {}, {}],
		loadedSithCount: 0,
        currentPlanet: {
            name: 'Tatooine',
            id: 0
        }
    },
};

const eventListeners = {
    onButtonUp: () => store.dispatch(buttonUp()),
    onButtonDown: () => store.dispatch(buttonDown())
}

// configure store and dispatch first actions
const store = configureStore(initialState)

store.dispatch(fetchSith({
    id: 3616,
    index: 0
}))
store.dispatch(listenForPlanets());

// setup virtual dom diffs & patches
let tree = createRoot(initialState, eventListeners)
let rootNode = createElement(tree)

const updateTree = state => {
    const newTree = createRoot(state, eventListeners)
    const patches = diff(tree, newTree)
    rootNode = patch(rootNode, patches)
    tree = newTree
}

store.subscribe(() => {
    updateTree(store.getState())
})

const App = rootNode

export default App
