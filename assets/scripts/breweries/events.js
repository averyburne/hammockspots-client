const mapUi = require('../maps/ui')
// const mapThing = require('..templates/map.handlebars')

const makeMap = function (event) {
  mapUi.makeMap
}

const addHandlers = () => {
  $('#map-button').on('click', makeMap)
}

module.exports = {
  addHandlers
}
