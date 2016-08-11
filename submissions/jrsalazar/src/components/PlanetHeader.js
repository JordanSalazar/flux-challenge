// planet header component
import React, { Component, PropTypes } from 'react'

export default class PlanetHeader extends Component {
    
    render() {
        return (
                <h1 className="css-planet-monitor">
                    Obi wan is currently on { this.props.currentPlanet } 
                </h1>
        )
    }
}

PlanetHeader.propTypes = {
    currentPlanet: PropTypes.string.isRequired
}
