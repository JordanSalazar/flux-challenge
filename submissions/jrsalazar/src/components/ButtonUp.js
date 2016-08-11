
import React, { Component, PropTypes } from 'react'

export default class ButtonUp extends Component {

    render() {
        const { buttonUpClick, disabled } = this.props
        
        return (
            <button
            className={ 'css-button-up ' + (disabled ? 'css-button-disabled' : '') }
                onClick={ buttonUpClick }
            >
            </button>
        )
    }
}

ButtonUp.propTypes = {
    buttonUpClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}
