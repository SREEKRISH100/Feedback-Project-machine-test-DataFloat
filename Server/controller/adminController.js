// admincontroller
const Feedback = require('../model/Feedback');
const User=require('../model/User');


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
        // Populate 'user' field from Feedback model
        const feedbacks = await Feedback.find()
            .populate('user', 'username email') // Fetch username & email from User
            .sort({ createdAt: -1 }); // latest feedback first

        res.status(200).json(feedbacks);
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
module.exports = { AdminViewAllUsers,AdminViewUsersFeedback };