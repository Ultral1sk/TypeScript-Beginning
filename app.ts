let userInput : unknown;
let userName: string;

userInput = 'jovan';


if( typeof userInput === 'string') {
      userName = userInput
      console.log(userName) 
}

// utility function that throws errors
function generateError(message : string, code : number) {
      throw { message : message, errorCode : code }
}

generateError(`Error occured with status`, 500)