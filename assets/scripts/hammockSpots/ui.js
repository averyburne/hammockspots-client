'use strict'

const create = function (data) {
  const pointers = []
  console.log(data)
  console.log(pointers)
  for (let i = 0; i < data.hammockSpot.length; i++) {
    if (data.hammockSpot[i].lat !== null && data.hammockSpot[i].lng !== null) {
      if (data.hammockSpot[i].lat !== undefined && data.hammockSpot[i].lng !== undefined) {
        pointers.push({ lat: data.hammockSpot[i].lat, lng: data.hammockSpot[i].lng })
      }
    }
  }
  $('#map-info').val({ pointers: pointers })
}

module.exports = {
  create
}
