const { Moderators } = require('../db/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Moderators.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.Password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, 'sr.en.g.i.n.e3e#', {});

    res.status(200).json({ token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { Name, newPassword } = req.body;
    
    const hashedPassword = await bcrypt.hash(newPassword, 10); 

    const updatedUser = await Moderators.update(
      { Password: hashedPassword }, 
      { where: { Name: Name } }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.CreateModerator = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const existingMentor = await Moderators.findOne({ where: { email } });
    if (existingMentor) {
      return res.status(400).json({ message: 'Mentor with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); 

    const newMentor = await Moderators.create({
      Email: email,
      Name: name,
      Password: hashedPassword,
    });

    

    res.status(201).json({ message: 'Mentor created successfully' });
  } catch (error) {
    console.error('CreateMentor error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};