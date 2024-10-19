// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken"

const jwtAuth = (req, res, next) => {

  // const token = req.cookies.jwtToken || req.headers['authorization']?.split(' ')[1]; // Check both cookies and authorization header
  
  const token = req.cookies.jwtToken; // Read the token from the cookie
 // console.log(token);

  //  if no token, return the error.
  if (!token) {
    return res.status(401).json({ success: false, msg: 'Token missing' });
  }


  // verify the token
  try {
    const payload = jwt.verify(
      token,
      'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz'
    );
    // console.log(payload);

    req.user = payload; 
    next();  // call the next middleware
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false, msg: 'jwt must be provided' });
  }
};

export default jwtAuth;
