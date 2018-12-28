function filterFunc (...args) {
    return args.filter(el => el === 1);
}

function sortFunc (...args) {
    return args.sort();
}

const someArray = [1, 5, 4, 2, 3];
console.log('someArray: ', someArray);
console.log('filterFunc: ', filterFunc(...someArray));
console.log('sortFunc: ', sortFunc(...someArray));