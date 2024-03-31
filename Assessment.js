const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    title: String,
    description: String,
    // Other fields...
});

module.exports = mongoose.model('Assessment', assessmentSchema);
