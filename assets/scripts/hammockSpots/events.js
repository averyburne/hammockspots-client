const getFormFields = require('../../../lib/get-form-fields')
const mapUi = require('../maps/ui')
const ui = require('./ui')
// const mapThing = require('..templates/map.handlebars')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  ui.create(event)
}

const makeMap = function (event) {
  mapUi.makeMap()
}

const addHandlers = () => {
  $('#map-button').on('click', makeMap)
  $('#add-hammockSpot').on('submit', onCreate)
}

module.exports = {
  addHandlers
}
