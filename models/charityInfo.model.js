const mongoose = require('mongoose')
const Schema = mongoose.Schema

const charityInfoSchema = new Schema({
    charityName: {type: String, required:true},
    charityDescription: {type: String, required:true},
    charityURL: {type: String},
    charityFacebook: {type:String},
    charityPhoneNumber: {type: String},
    charityDonationURL: {type: String},
    charityVolunteerInstructions: {type: String},
    charityState: {type: String, required: true},
    charityCity: {type: String, required:true},
    charityAddress: {type: String, required:true},
}, {
    timestamps: true,
})

const CharityInfo = mongoose.model('CharityInfo', charityInfoSchema)

module.exports = CharityInfo