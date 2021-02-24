// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driverObject, key, value){
    const newDriver = {...driverObject};
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key,value){
    driverObject[key] = value;
    return driverObject;
}

function destructivelyDeleteFromDriverByKey(driverObject,key){
    delete driverObject[key];
    return driverObject;
}

function deleteFromDriverByKey(driverObject,key){
    const newDriver = {...driverObject};
    delete newDriver[key];
    return newDriver;
}