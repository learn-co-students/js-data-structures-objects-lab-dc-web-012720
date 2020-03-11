// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, newKey, newValue) {
    let newObj = Object.assign({}, driver)
    newObj[newKey] = newValue
    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let newObj = Object.assign({}, driver)
    delete newObj[key]
    return newObj;
}