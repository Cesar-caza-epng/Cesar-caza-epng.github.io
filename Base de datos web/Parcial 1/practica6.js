const ima=document.getElementById("dice_image");

function getNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function button(){
    var num=getNum(1,6);
    if (num === 1) {
        ima.src = "imgs/angry-birds-cats.gif"; 
    } else if (num === 2) {
        ima.src = "imgs/angry-birds-dice-angry-bird-dice-roll.gif"; 
    } else if (num === 3) {
        ima.src = "imgs/angry-birds-dice-christmas-itchywill.gif"; 
    } else if (num === 4) {
        ima.src = "imgs/angry-birds-dice-if-i-roll-a-12.gif"; 
    } else if (num === 5) {
        ima.src = "imgs/i-dont-care-what-number-you-get-angry-birds-dice.gif"; 
    } else {
        ima.src = "imgs/dice-angry-birds.gif"; 
    }
    console.log(num);
}