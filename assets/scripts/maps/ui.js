const mapThing = require('../templates/map.handlebars')

const makeMap = function () {
  const showMapHTML = mapThing()
  $('.map-content').html(showMapHTML)
}

module.exports = {
  makeMap
}
