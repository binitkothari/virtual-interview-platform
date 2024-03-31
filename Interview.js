const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    title: String,
    date: Date,
    duration: Number,
    status: { type: String, enum: ['scheduled', 'ongoing', 'completed'], default: 'scheduled' },
    candidates: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, status: String }],
    interviewers: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }],
    // Other fields...
});

module.exports = mongoose.model('Interview', interviewSchema);
