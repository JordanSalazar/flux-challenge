// app component
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { buttonUp, buttonDown } from '../../actions'
import PlanetHeader from '../PlanetHeader'
import SithList from '../SithList'
import ButtonUp from '../ButtonUp'
import ButtonDown from '../ButtonDown'

class App extends Component {

    render() {
        const {
            currentPlanet,
            siths,
            buttonUpClick,
            buttonDownClick,
            reachedTop,
            reachedBottom
        } = this.props

        return (
                <div>
                    <div className="css-root">
                        <PlanetHeader currentPlanet={currentPlanet.name} />

                        <section className="css-scrollable-list">
                            <SithList siths={siths} />

                            <div className="css-scroll-buttons">
                                <ButtonUp
                                    disabled={reachedTop}
                                    buttonUpClick={buttonUpClick}
                                />
                                <ButtonDown
                                    disabled={reachedBottom}
                                    buttonDownClick={buttonDownClick}
                                />
                            </div>
                        </section>
                    </div>
                </div>
        )
    }
}

App.propTypes = {
    currentPlanet: PropTypes.object.isRequired,
    buttonUpClick: PropTypes.func.isRequired,
    buttonDownClick: PropTypes.func.isRequired,
    siths: PropTypes.array.isRequired,
    reachedTop: PropTypes.bool,
    reachedBottom: PropTypes.bool

}

// params destructures state into seperate variables
function mapStateToProps({ sith_state }) {
    let { currentPlanet, planetMatched, siths, reachedTop, reachedBottom } = sith_state
    return {
        currentPlanet: currentPlanet,
        planetMatched: planetMatched,
        siths: siths,
        reachedTop,
        reachedBottom
    }
}

function mapDispatchToProps(dispatch) {
    return {
        buttonUpClick: () => dispatch(buttonUp()),
        buttonDownClick: () => dispatch(buttonDown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

