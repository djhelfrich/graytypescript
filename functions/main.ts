//Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number )[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}
//Connnot do with interfaces
type UserId = stringOrNumber


/*
Interfaces are class or object
Type are alias, any type of typescript to assign

*/


//Literal types
let myName: 'Dave'

//Expected multiple variable values
let userName: 'Dave' | 'John' | 'Amy'

userName = 'Amy'
//Can not be Rachel only Dave, John or Amy
//userName = 'Rachel'

//functions

const add = (a:number, b: number):number => 
{
    return a + b
}
//side effects for no return function :void
const logMsg = (message: any): void => {
    console.log(message)
}

let substract = function (c: number, d:number): number {
    return c - d
}

logMsg('Hello!')
logMsg(add(2,3))

