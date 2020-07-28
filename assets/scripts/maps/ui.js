const mapThing = require('../templates/map.handlebars')

const makeMap = function () {
  const showMapHTML = mapThing()
  $('#map').html(showMapHTML)
}

module.exports = {
  makeMap
}
