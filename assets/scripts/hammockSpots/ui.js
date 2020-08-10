'use strict'

const create = function (data) {

}

const onIndexSuccess = function (data) {
  const pointers = []
  for (let i = 0; i < data.hammockSpot.length; i++) {
    if (data.hammockSpot[i].lat !== null && data.hammockSpot[i].lng !== null) {
      if (data.hammockSpot[i].lat !== undefined && data.hammockSpot[i].lng !== undefined) {
        console.log(data.hammockSpot[i])
        pointers.push({ lat: data.hammockSpot[i].lat, lng: data.hammockSpot[i].lng })
      }
    }
  }
  $('#map-info').val({ pointers: pointers })
}

const onIndexFailure = function (data) {
  console.log("didn't work")
}

module.exports = {
  create,
  onIndexSuccess
}
