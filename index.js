// Write your solution in this file!
const driver = {name: "sam"}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value 
    return driver 
}

function deleteFromDriverByKey(driver, key) {
    let x = Object.assign({}, driver)
    delete x[key]
    return x 
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver 
}