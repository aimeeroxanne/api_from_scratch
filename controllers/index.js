const model = require('../models/index.js')

function getAll(req, res, next){
  const data = model.getAll()
  res.status(200).json({data})
}

function create(req, res, next){
  const snack = model.create(req.body)
  res.status(201).json({ data: snack })
}

module.exports = { getAll, create }
