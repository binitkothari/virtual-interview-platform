const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    industry: String,
    // Other fields...
});

module.exports = mongoose.model('Company', companySchema);
