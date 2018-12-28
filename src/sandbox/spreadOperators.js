const oldArray = [1, 2, 3];

const oldObject = {
    field: 'fieldValue'
};

console.log('oldArray: ', oldArray);
console.log('oldObject: ', oldObject);

const newArray = [...oldArray, 4, 5];
const newObject = {...oldObject, newField: 'someValue2'};

console.log('newArray: ', newArray);
console.log('newObject: ', newObject);