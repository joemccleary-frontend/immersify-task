import React from 'react'
import PropTypes from 'prop-types'
import images from '../../../images/index'

export const DisplayContent = (props) => {

    const names = props.names
    const imageLocations = props.imageLocations

    var outputJSX = [];

    if (names.length !== 0 && imageLocations.length !== 0) {
        outputJSX.push(
            <>
                <h1>{names[0]}</h1>
                <img src={images['Coccinella']}></img>
            </>
        );
    }

    return outputJSX;

}

DisplayContent.propTypes = {
    names: PropTypes.array,
    imageLocations: PropTypes.array,
}
