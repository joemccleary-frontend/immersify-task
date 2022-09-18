import React from 'react'

import { GetLadybugs } from '../Utils/getLadybugs'
import { DisplayContent } from './DisplayContent/DisplayContent'
var ladybugNames = [];
var ladybugFull = [];
var ladybugDescription = [];
var ladybugImage = [];

export const Landing = () => {

    GetLadybugs(gotDataCallback)

    function gotDataCallback (data) {
        var jsonData = data();
        var objectData = JSON.parse(jsonData);

        objectData.ladybugs.forEach(bug => {
            if (bug.name) {
                ladybugNames.push(bug.name);
                ladybugFull[bug.name] = {};
                ladybugFull[bug.name].a = bug.name+' ladybug';
            }
            if (bug.imageLocation) {
                ladybugImage.push(bug.imageLocation);
                ladybugFull[bug.name].b = bug.imageLocation.replace("jpg","png");
            }
            if (bug.description) {
                ladybugDescription.push(bug.description);
                ladybugFull[bug.name].c = bug.description;
            }            
        });
        // console.log(ladybugFull);
        // console.log("image", ladybugImage);
    }

    return (
        <>
            <h1>The ladybug Page</h1>

            <div className='grid-container'>
            <DisplayContent
                names={ladybugNames}
                imageLocations={ladybugImage}
            />
            </div>

        </>
    );
}