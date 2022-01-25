const { errorObject } = require('../../middlewares/utils')
const { listInitOptions } = require('./listInitialOptions')
const { cleanPaginationId } = require('./cleanPaginationId')

/**
 * Gets items from database
 * @param {Object} req - request object
 * @param {Object} query - query object
 */
const getItems = async (req = {}, model = {}, query = {}) => {
  console.log(model)
  console.log('********************************')
  console.log('Initial in Get Items to call List Init Options')
  const options = await listInitOptions(req)
  console.log(options)
  console.log('********************************')
  return new Promise((resolve, reject) => {
    model.paginate(query, options, (err, items) => {
      if (err) {
        return reject(errorObject(422, err.message))
      }
      resolve(cleanPaginationId(items))
    })
  })
}

module.exports = { getItems }