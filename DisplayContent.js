import React from 'react'
import PropTypes from 'prop-types'
import images from '../../../images/index'

export const DisplayContent = (props) => {

    const names = props.names
    const imageLocations = props.imageLocations

    var outputJSX = [];

    if (names.length !== 0 && imageLocations.length !== 0) {
        for (let i = 0; i < names.length; i++) {
            outputJSX.push(
                <>
                    <h1>{names[i]}</h1>
                    <img src={images[imageLocations[i].slice(0,-4)]}></img>
                </>
            );
          }

    }

    return outputJSX;

}

DisplayContent.propTypes = {
    names: PropTypes.array,
    imageLocations: PropTypes.array,
}
