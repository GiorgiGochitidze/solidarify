const Lawyer = require('../models/Lawyer')

const getLawyers = function (req, res) {
  Lawyer.find()
    .then((lawyers) => res.status(200).json(lawyers))
    .catch((error) => res.status(500).json({ message: 'Error fetching lawyers' }))
}

module.exports = {
  getLawyers
}
