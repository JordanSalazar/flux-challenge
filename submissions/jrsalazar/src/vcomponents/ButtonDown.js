import h from 'virtual-dom/h'

const createButtonDown = ({ planetMatched }, onButtonDown) => {
    const disabledClass = planetMatched ? '.css-button-disabled' : ''
    const clickFn = planetMatched ? null : onButtonDown

    return h('button.css-button-down' + disabledClass, {
         onclick: clickFn
    })
}

export default createButtonDown
