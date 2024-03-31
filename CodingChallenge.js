const mongoose = require('mongoose');

const codingChallengeSchema = new mongoose.Schema({
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    title: String,
    description: String,
    problemStatement: String,
    // Other fields...
});

module.exports = mongoose.model('CodingChallenge', codingChallengeSchema);
