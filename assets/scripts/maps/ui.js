const mapThing = require('../templates/map.handlebars')

const makeMap = function () {
  console.log('henlo')
  const showMapHTML = mapThing()
  $('#map-canvas').html(showMapHTML)
}

module.exports = {
  makeMap
}
