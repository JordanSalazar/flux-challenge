import h from 'virtual-dom/h'

const createButtonUp = ({ planetMatched }, onButtonUp) => {
    const disabledClass = planetMatched ? '.css-button-disabled' : ''
    const clickFn = planetMatched ? null : onButtonUp

    return h('button.css-button-up' + disabledClass, {
         onclick: clickFn
    })
}

export default createButtonUp
