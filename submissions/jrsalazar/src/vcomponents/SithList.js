import h from 'virtual-dom/h'
import R from 'ramda'

const createSith = ({ color, name, homeworld } = {}) => {
    const styles = {
        color: color ? 'red' : ''
    }

    const subtext = homeworld ? 'Homeworld: ' + homeworld.name : ''

    const sith = h(
        'li.css-slot',
        {
            style: styles
        },
        [
            h('h3', name),
            h('h6', subtext)
        ]
    )

    return sith
}

const appendToList = siths => h('ul.css-slots', siths)

const createList = R.compose(appendToList, R.map(createSith), R.prop('siths'))

export default createList
