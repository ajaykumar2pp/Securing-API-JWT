// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken"

const jwtAuth = (req, res, next) => {

    // const token = req.headers['authorization'];
  // const token = req.header('Authorization');
  const token = req.cookies.jwtToken;
 // console.log(token);

// const bearerToken = token.split(' ')[1];

  //  if no token, return the error.
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Token missing' });
  }


  // check if token is valid.
  try {
    const payload = jwt.verify(
      token,
      'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz'
    );
    // console.log(payload);

    req.user = payload; 
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false, msg: 'jwt must be provided' });
  }
};

export default jwtAuth;
