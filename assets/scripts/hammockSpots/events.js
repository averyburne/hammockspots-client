const getFormFields = require('../../../lib/get-form-fields')
const mapUi = require('../maps/ui')
const ui = require('./ui')
const api = require('./api')
// const mapThing = require('..templates/map.handlebars')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.create(data))
}

const onIndex = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.index()
    .then(ui.onIndexSuccess())
    // .then(mapUi.makeMap())
    .catch(ui.onIndexFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  api.update()
}

const onDelete = function (event) {
  event.preventDefault()
  api.destroy()
}

const makeMap = function (event) {
  mapUi.makeMap()
}

const addHandlers = () => {
  $('#map-button').on('click', makeMap)
  $('#get-locations').on('click', onIndex)
  $('#add-hammockSpot').on('submit', onCreate)
}

module.exports = {
  addHandlers
}
