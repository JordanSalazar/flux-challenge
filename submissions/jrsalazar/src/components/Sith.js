
import React, { Component, PropTypes } from 'react'

export default class Sith extends Component {

    render() {
        const { color, name, home } = this.props
        const styleObj = {
            color: color ? 'red' : ''
        }

        return (
            <li className="css-slot" style={styleObj}>
                    <h3>
                        {name}
                    </h3>
                    <h6>
                        {home}
                    </h6>
                </li>
        )
    }
}

Sith.propTypes = {
    color: PropTypes.bool,
    name: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired
}
