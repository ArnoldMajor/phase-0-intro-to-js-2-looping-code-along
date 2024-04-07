const names = ['Charlie', 'Samip', 'Ali'];
let events = 'birthday';

function writeCards (names, events){
    let newNames = [];
    for (let i = 0; i < names.length; i++){
        let cardMessage = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
        console.log(cardMessage);
        newNames.push(cardMessage);
    }
    return newNames
}

console.log(writeCards(names, events));

function countDown (){
    let number = 10
    while (number >= 0){
    console.log(number--);
}
}

countDown();