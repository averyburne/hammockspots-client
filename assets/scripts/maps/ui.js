const mapThing = require('../templates/map.handlebars')

const makeMap = function () {
  console.log('henlo')
  const showMapHTML = mapThing()
  console.log(showMapHTML)
  $('.map-content').html(showMapHTML)
}

module.exports = {
  makeMap
}
