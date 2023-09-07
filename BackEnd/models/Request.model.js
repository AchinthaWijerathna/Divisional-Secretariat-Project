const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const RequestSchema = new Schema({
    Requestname: { type: String, required: true },
    nic: { type: String, required: true },
    contacnumber: { type: String, required: true },
    problemTopic : { type: String, required: true },
    problem : { type: String, required: true },
    address : { type: String, required: true },
    date : { type: Date, required: true },
    

}, {
    timestamps: true,
});



const Request = mongoose.model('Request', RequestSchema);

module.exports = Request;