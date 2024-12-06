const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./Models/user');
const { default: mongoose } = require('mongoose');
const stripe = require('stripe')('sk_test_51PesjgEivxsvCmzQ9OVNq4WmsPjHZFo3LgBiYaYUN1WTsS468HZ3OHO7Y0WIdAImHsxiyegQ8Z7Erh0TS6OtJeJj00qAoz05RB');
const connectDB = require('./db');
const app = express();
const port = process.env.PORT||3000;


connectDB();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
      
      const hashedPassword = await bcrypt.hash(password, 10);

      
      const newUser = new User({
          username,
          email,
          password: hashedPassword
      });

      
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering user', error });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, 'd6536b58871487e80e0ba4b6d5fd06172d7df77132c95c35f53a93d0ce752749', {
      expiresIn: '1h',
    });

    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/payment', async (req, res) => {
  try {
    const product = await stripe.products.create({
      name: "Appointment fees"
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 1000 * 100, // Amount in cents
      currency: 'inr'
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price: price.id,
        quantity: 1
      }],
      mode: 'payment',
      success_url: 'https://telemedicine-1-cssc.onrender.com/',
      cancel_url: 'http://localhost:3000/cancel'
    });

    res.json(session);
  } catch (error) {
    console.error('Error creating payment session:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});