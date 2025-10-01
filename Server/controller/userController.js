const User = require('../model/User');
const Feedback = require('../model/Feedback')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (email === process.env.adminEmail) {
            return res.status(400).json({ msg: 'Email already rergistered' })

        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: 'Email already rergistered' })
        }
        const newUser = new User({
            username,
            email,
            password,
        })
        await newUser.save()
        res.status(201).json({ msg: 'User Registered successfully' });
    } catch (error) {
        console.error('Registartion Error:', error)
        res.status(500).json({ msg: 'Server Registartion Error' })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (email === process.env.adminEmail && password === process.env.adminPassword) {

            const token = jwt.sign({ email }, process.env.JWT_KEY, { expiresIn: "1h" })
            // console.log(token)
            return res.status(200).json({ msg: "Admin login Successfull ", role: "admin", token })


        }


        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(401).json({ msg: 'Invalid Credentials' })
        }
        if (password === userExist.password) {
            const token = jwt.sign({ id:userExist._id }, process.env.JWT_KEY, { expiresIn: "1h" })

            return res.status(200).json({ msg: 'Login Successfull', token, role: "user" })

        } else {
            return res.status(401).json({ msg: 'Invalid Password' })
        }
    } catch (error) {
        console.error('Login Server Failed:', error)
        return res.status(500).json({ msg: 'Login Server Failed' })
    }
}



const addFeeback = async (req, res) => {
    const { comments, rating } = req.body;
    const userid = req.user.id;
    //  console.log(userid)
    try {
        const feedback = new Feedback({
            user: userid,
            comments,
            rating,
        });

        await feedback.save();
        return res.status(200).json({ msg: 'Feedback Added Successfully', feedback });
    } catch (error) {
        console.error('feedback Add Server Error:', error);
        return res.status(500).json({ msg: 'feedback Add Server Error' });
    }
};

const viewFeeback = async (req, res) => {
    const userid = req.user.id;
    try {
        if (!userid) {
            return res.status(400).json({ msg: 'User id not found!' });
        }
        const feedback = await Feedback.find({ user: userid })
            .sort({ createdAt: -1 });
        res.status(200).json(feedback);
    } catch (error) {
        console.error('View feedback Server Error:', error)
        return res.status(500).json({ msg: 'View feedback Server Error' })
    }

}


const deleteFeeback = async (req, res) => {
    const feedbackid = req.params.id;
    try {
        if (!feedbackid) {
            return res.status(400).json({ msg: 'feedback id not found!' });
        }
        const feedback = await Feedback.findByIdAndDelete(feedbackid);
        if (!feedback) {
            return res.status(400).json({ msg: 'feedback not Deleted!' });
        }
        res.status(200).json({ msg: 'feedback Deleted Successfully' });
    } catch (error) {
        console.error('feedback Deletion Error', error);
        return res.status(500).json({ msg: 'feedback Deletion Error' });
    }
}



module.exports = { deleteFeeback, viewFeeback, registerUser, loginUser, addFeeback };