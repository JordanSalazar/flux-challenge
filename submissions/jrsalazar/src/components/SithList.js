
import React, { Component, PropTypes } from 'react'
import Sith from './Sith.js'

export default class SithList extends Component {

    render() {
        const { siths } = this.props
        return (
                <ul className="css-slots">
                    {
                        siths.map((sith, i) => {
                            return <Sith 
                                key={i}
                                color={sith.color}
                                name={sith.name ? sith.name : ''}
                                home={sith.homeworld
                                    ? sith.homeworld.name
                                    : ''
                                }
                            />
                        })
                    }
                </ul>
        )
    }
}

SithList.propTypes = {
    siths: PropTypes.array.isRequired
}
