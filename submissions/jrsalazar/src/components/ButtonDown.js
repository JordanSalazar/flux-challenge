
import React, { Component, PropTypes } from 'react'

export default class buttonDown extends Component {

    render() {
        const { buttonDownClick, disabled } = this.props
        console.log(disabled) 
        return (
            <button
            className={ 'css-button-down ' + (disabled ? 'css-button-disabled' : '') }
                onClick={ buttonDownClick }
            >
            </button>
        )
    }
}

buttonDown.propTypes = {
    buttonDownClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}
