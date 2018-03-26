//roll a 6 sided die
function rollDie(sides){
    var num = Math.floor((Math.random() * sides) + 1)
    return num;
}

// console.log(rollDie());

//choose side and number of dice

function rollDice(sides, num){
    var diceRolls = []
    for(let i = 1; i <= num; i++){
        diceRolls.push(rollDie(sides))
    }
    return diceRolls;
}

console.log(rollDice(20, 2));
