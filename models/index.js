const data = require('../data.json')
const uuid = require('uuid')

function create (body) {
  const name = body.name
  const unit = body.unit
  const price = body.price
  const quantity = body.quantity
  const snack = {
    "id": uuid(),
    "name": name,
    "unit": unit,
    "price": price,
    "quantity": quantity
  }
  data.push(snack)
}

function getAll(){
  return data
}

module.exports = { getAll, create }
