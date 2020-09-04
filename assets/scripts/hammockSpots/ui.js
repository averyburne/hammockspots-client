'use strict'
const showHammockSpotsTemplate = require('../templates/hammockSpot.handlebars')

const create = function (data) {

}

const onIndexSuccess = function (data) {
  const showHammockSpotsHtml = showHammockSpotsTemplate({ hammockSpots: data.hammockSpot })
  $('.content').html(showHammockSpotsHtml)
  if(data.hammockSpot.length === 0) {
    console.log('theres no locations')
  }

  const pointers = []
  const ids = []
  for (let i = 0; i < data.hammockSpot.length; i++) {
    if (data.hammockSpot[i].lat !== null && data.hammockSpot[i].lng !== null) {
      if (data.hammockSpot[i].lat !== undefined && data.hammockSpot[i].lng !== undefined) {
        console.log(data.hammockSpot[i])
        pointers.push({ lat: data.hammockSpot[i].lat, lng: data.hammockSpot[i].lng })
        ids.push(data.hammockSpot[i]._id)
      }
    }
  }
  $('#map-info').val({ pointers: pointers })
  $('#map-info').val({ ids: ids})
  console.log(ids)
  console.log($('#map-info').val)
}

const onIndexFailure = function (data) {
  console.log("didn't work")
}

const onUpdateSuccess = function (data) {
  console.log('Updated!')
}

const onUpdateFailure = function (data) {
  console.log('Failed!')
}

module.exports = {
  create,
  onIndexSuccess,
  onIndexFailure,
  onUpdateSuccess,
  onUpdateFailure
}
