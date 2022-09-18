
import { noNodeData } from "./noNodeData";

export function GetLadybugs (gotDataCallback) {

    console.log('get ladybugs')

    checkForServer(gotDataCallback)
}

function checkForServer (gotDataCallback) {
    var myHeaders = new Headers();

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    fetch("http://localhost:3000/api/test", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            if (result !== "success") {
                gotDataCallback(noNodeData)
            }
            else {
                getLadybugs(gotDataCallback)
            }
        })
        .catch(() => {
            gotDataCallback(noNodeData());
        });
}

function getLadybugs (gotDataCallback) {
    var myHeaders = new Headers();

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    fetch("http://localhost:3000/getLadybugs", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            gotDataCallback(result);
        })
        .catch((error) => {
            console.log(error);
        });
}