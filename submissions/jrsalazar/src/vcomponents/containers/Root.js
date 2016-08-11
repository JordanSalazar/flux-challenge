import h from 'virtual-dom/h'
import createList from '../SithList.js'
import createHeader from '../PlanetHeader.js'
import createButtonDown from '../ButtonDown.js'
import createButtonUp from '../ButtonUp.js'

const createRoot = ({ sith_state }, listeners) => {
    const state = sith_state

    const sithList      = createList(state)
    const planetHeader  = createHeader(state)
    const buttonUp      = createButtonUp(state, listeners.onButtonUp)
    const buttonDown    = createButtonDown(state, listeners.onButtonDown)

    const root = h(
        '.css-root',
        [
            planetHeader,
            h('section.css-scrollable-list', [
                sithList,
                h('.css-scroll-buttons', [
                    buttonUp,
                    buttonDown
                ])
            ])
        ]
    )

    return root
}

export default createRoot
