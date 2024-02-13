const Admin = require("../model/model.admin")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createAdmin = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = new Admin({
            "username":username,
            "email":email,
            "password":hash
        });
        const admin_re = await newUser.save();
        res.status(201).json(admin_re);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.loginAdmin = async (req,res) => {
    try {
        const { email, password } = req.body;
        const SECRET_KEY = 'your_secret_key_here';
        // Find Admin by email
        const admin = await Admin.findOne({email});
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        // console.log(admin)
        
        // Compare password
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        // console.log(isPasswordValid)
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }
    
        // Create and send JWT token
        const token = jwt.sign({ adminID: admin.id, email: admin.email }, SECRET_KEY, { expiresIn: '1h' });
        
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.showAdmin = async (req,res) => {
    try {
        Admin.find().then(data => res.send(data))
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getAdminById = async (req, res) => {
    try {
        const user = await Admin.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};