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
    .then(onIndex())
}

const onIndex = function (event) {
  api.index()
    .then(ui.onIndexSuccess)
    .then(mapUi.makeMap)
    .catch(ui.onIndexFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  api.update()
}

const onDelete = function (event) {
  event.preventDefault()
  console.log('hello')
  const id = $(event.target).data('id')
  api.destroy(id)
    .then(function () {
      onIndex(event)
    })
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

const makeMap = function (event) {
  mapUi.makeMap()
}

const handleAsync = () => {
  setTimeout(function () {
    console.log('waiting')
  }, 5000)
}

const addHandlers = () => {
  $('#map-button').on('click', makeMap)
  $('#get-locations').on('click', onIndex)
  $('#add-hammockSpot').on('submit', onCreate)
  $('.content').on('click', '.remove-hammockSpot', onDelete)
}

module.exports = {
  addHandlers
}
