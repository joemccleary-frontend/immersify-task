import React from 'react'

import { GetLadybugs } from '../Utils/getLadybugs'
import { DisplayContent } from './DisplayContent/DisplayContent'

export const Landing = () => {

    GetLadybugs(gotDataCallback)

    function gotDataCallback (data) {
        //console.log(data)
    }

    return (
        <>
            <h1>Landing Page</h1>

            <DisplayContent
                names={["Ladybug1", "Ladybug2", "Ladybug3"]}
                imageLocations={[
                    "Coccinella.jpg",
                    "image2.jpg",
                    "image3.jpg",
                ]}
            />
        </>
    );
}