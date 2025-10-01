const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    comments: { type: String, required: true },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
}, { timestamps: true })

const Feedback = mongoose.model('feedback_tbls', feedbackSchema);

module.exports = Feedback;