const router = require('express').Router()
let CharityInfo = require('../models/charityInfo.model')

router.route('/').get((req,res) =>{
    CharityInfo.find()///Mongoose method that returns promise
    .then(charityData => res.json(charityData))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) =>{
    const charityName = req.body.charityName
    const charityDescription = req.body.charityDescription
    const charityURL = req.body.charityURL
    const charityFacebook = req.body.charityFacebook
    const charityPhoneNumber = req.body.charityPhoneNumber
    const charityDonationURL = req.body.charityDonationURL
    const charityVolunteerInstructions = req.body.charityVolunteerInstructions
    const charityState = req.body.charityState
    const charityCity = req.body.charityCity
    const charityAddress = req.body.charityAddress

    const potentialCharity = new CharityInfo({
        charityName,
        charityDescription,
        charityURL,
        charityFacebook,
        charityPhoneNumber,
        charityDonationURL,
        charityVolunteerInstructions,
        charityState,
        charityCity,
        charityAddress,
    })

    potentialCharity.save()///Mongoose again
    .then(() => res.json('Charity Info Sent'))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router