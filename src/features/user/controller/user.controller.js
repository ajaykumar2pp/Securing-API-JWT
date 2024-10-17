// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';
import { addUser, confirmLogin } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Check if the login is successful
  const isLoginSuccessful = confirmLogin({ email, password });

  if (isLoginSuccessful) {
    // Create JWT token
    const token = jwt.sign(
      { email },
      'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
      { expiresIn: '1h' }
    );

    // Store the token in a cookie named "jwtToken"
    res.cookie('jwtToken', token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,// Cookie expiration time (1 hour)
    });

    // Send response
    res.status(200).json({ status: 'success', msg: 'Login successful', token });
  } else {
    res.status(400).json({ status: 'failure', msg: 'Invalid user details' });
  }
};
