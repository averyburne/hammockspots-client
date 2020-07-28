'use strict'

const create = function (data) {

}

const onIndexSuccess = function (data) {
  const pointers = []
  console.log(data.hammock)
  for (let i = 0; i < 1; i++) {
    if (data.hammock.lat !== null && data.hammock.lng !== null) {
      if (data.hammock.lat !== undefined && data.hammock.lng !== undefined) {
        pointers.push({ lat: data.hammock.lat, lng: data.hammock.lng })
      }
    }
  }
  console.log(pointers)
  $('#map-info').val({ pointers: pointers })
  console.log($('#map-info').val)
}

module.exports = {
  create
}
