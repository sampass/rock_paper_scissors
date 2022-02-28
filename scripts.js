function randomNum(min = 1, max = 4) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + 1;
    return rand;
}

