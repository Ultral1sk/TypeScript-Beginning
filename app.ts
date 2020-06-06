/* Core Type NUMBER */

// function add( n1 :number, n2 :number ) {
//       return n1 +  n2;
// }

// const number1 = 5;
// const number2 = 2.8


// const result = add(number1, number2);




/* Core Type Boolean + String */

function add( n1 :number, n2 :number, showResult:boolean, phrase : string ) {

      const result = n1 + n2

      if(showResult) {
        console.log(phrase + result)

      } else {
            return result
      }

      
}

let number1 : number
number1 = 5;
// number1 = "5" <-- throws an error because we specified that we want to store nubmers not strings or etc.
const number2 = 2.8
const printResult = true;
const resultPhrase = `Result is : `

const result = add(number1, number2, printResult, resultPhrase);