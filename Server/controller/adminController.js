// // admincontroller
// const Feedback = require('../model/Feedback');
// const User=require('../model/User');


// const AdminViewAllUsers = async (req, res) => {
//     try {
//         const users = await User.find().sort({ createdAt: -1 }); // latest first
//         res.status(200).json(users);
//     } catch (error) {
//         console.error("Error fetching users:", error);
//         res.status(500).json({ message: "Server Error" });
//     }
// };

// const AdminViewUsersFeedback = async (req, res) => {
//     try {
//         // Populate 'user' field from Feedback model
//         const feedbacks = await Feedback.find()
//             .populate('user', 'username email') // Fetch username & email from User
//             .sort({ createdAt: -1 }); // latest feedback first

//         res.status(200).json(feedbacks);
//     } catch (error) {
//         console.error("Error fetching feedbacks:", error);
//         res.status(500).json({ message: "Server Error" });
//     }
// };
// module.exports = { AdminViewAllUsers,AdminViewUsersFeedback };
// admincontroller.js
const Feedback = require('../model/Feedback');
const User = require('../model/User');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

// Helper function for mapping sentiment scores to categories
function analyzeSentiment(text) {
    const result = sentiment.analyze(text);

    if (result.score > 4) return "love";
    if (result.score > 2) return "happiness";
    if (result.score > 0) return "enthusiasm";
    if (result.score === 0) return "neutral";
    if (result.score < -4) return "hate";
    if (result.score < -2) return "anger";
    if (result.score < 0) return "worry";
    return "relief"; // fallback
}

const AdminViewAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 }); // latest first
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

const AdminViewUsersFeedback = async (req, res) => {
    try {
        let feedbacks = await Feedback.find()
            .populate('user', 'username email')
            .sort({ createdAt: -1 });

        // Run sentiment analysis if sentiment not stored
        feedbacks = await Promise.all(
            feedbacks.map(async fb => {
                if (!fb.sentiment) {
                    const sentimentLabel = analyzeSentiment(fb.comments);
                    fb.sentiment = sentimentLabel;
                    await fb.save(); // update DB with sentiment
                }
                return fb;
            })
        );

        res.status(200).json(feedbacks);
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { AdminViewAllUsers, AdminViewUsersFeedback };
