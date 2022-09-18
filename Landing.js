import React from 'react'

import { GetLadybugs } from '../Utils/getLadybugs'
import { DisplayContent } from './DisplayContent/DisplayContent'
var ladybugNames = [];
var ladybugDescription = [];
var ladybugImage = [];

export const Landing = () => {

    GetLadybugs(gotDataCallback)

    function gotDataCallback (data) {
        var jsonData = data();
        var objectData = JSON.parse(jsonData)

        objectData.ladybugs.forEach(bug => {
            if (bug.name) {
                ladybugNames.push(bug.name)
            }
            if (bug.description) {
                ladybugDescription.push(bug.description)
            }
            if (bug.imageLocation) {
                ladybugImage.push(bug.imageLocation)
            }
            
        });

    }

    return (
        <>
            <h1>Landing Page</h1>

            <DisplayContent
                names={ladybugNames}
                imageLocations={ladybugImage}
            />
        </>
    );
}