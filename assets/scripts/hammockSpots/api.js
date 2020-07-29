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

const delete = (id) => {
  return $.ajax({
    url: config.apiUrl + 'hammockSpots' + id,
    method: 'DELETE'
  })
}

const update = (data, id) => {
  return $.ajax({
    url: config.apiUrl + 'hammockSpots' + id,
    method: 'PATCH',
    data
  })
}

module.exports = {
  create,
  index
}
