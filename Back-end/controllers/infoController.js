const Info = require('../models/Info')

const getInfos = function (req, res) {
  Info.find()
    .then((infos) => res.status(200).json(infos))
    .catch((error) => res.status(500).json({ message: 'Error fetching infos' }))
}

module.exports = {
  getInfos
}
