import h from 'virtual-dom/h'

const createHeader = ({ currentPlanet }) => h(
    'h1.css-planet-monitor',
    ['Obi wan is currently on ' + currentPlanet.name]
)

export default createHeader
