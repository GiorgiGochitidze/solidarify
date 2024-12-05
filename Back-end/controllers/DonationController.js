const Donation = require('../models/Donation')

const getDonations = function (req, res) {
  Donation.find()
    .then((donations) => res.status(200).json(donations))
    .catch((error) => res.status(500).json({ message: 'Error fetching donations' }))
    //  console.log('DonationController: Test') testing in postman get method
}

module.exports = {
  getDonations
}
