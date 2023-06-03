interface Guitarist {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
name: 'Eddie Van Halen',
active: false,
albums: [1984, 5150, 'OU812']
}


const greetGutairist = (guitarist: Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarist.name}!`
    }
    return 'Hello!'
}

console.log(greetGutairist(evh));

//ENums

enum Grade {
    U,
    D,
    C,
    B,
    A
}

console.log(Grade.U)