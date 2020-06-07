"use strict";
// how does TTypeScriot know here that the button const has a document object inside
// why is it not complaining
const button = document.querySelector('button');
// the same for the event listener how it recognizes the event listener 
if (button) {
    button.addEventListener('click', () => {
        console.log(`clicked`);
    });
}
// this is the magic of "lib" : [], inside the ts.config
// in this case when nth is assigned it has some default options 
// and those default depend on the target or which version of js we've specified inside the target
// all es6 syntaxx will be supported and also all DOM API's 
// if we outcoment the lib , we are losing the default settings and we need to specify on our own
