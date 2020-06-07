var userInput;
var userName;
userInput = 'jovan';
if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userName);
}
// utility function that throws errors
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("Error occured with status", 500);
