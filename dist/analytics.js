"use strict";
// here we don't give ts any type to the parameter
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
}
sendAnalytics(`The data`);
