'use strict'
const config = require('../config')

const create = data => {
  return $.ajax({
    url: config.apiUrl + '/hammockSpots',
    method: 'POST',
    data
  })
}

const index = () => {
  return $.ajax({
    url: config.apiUrl + 'hammockSpots',
    method: 'GET'
  })
}

module.exports = {
  create,
  index
}
