const { handleError } = require('./handleError')
const { errorObject } = require('./errorObject')
const { removeExtensionFromFile } = require('./removeExtensionFromFile')
const { validateResult } = require('./validateResult')
const { itemNotFound } = require('./itemNotFound')
const { isIdValid } = require('./isIdValid')
const { successObject } = require('./successObject')

module.exports = {
    handleError,
    errorObject,
    removeExtensionFromFile,
    validateResult,
    itemNotFound,
    isIdValid,
    successObject
}