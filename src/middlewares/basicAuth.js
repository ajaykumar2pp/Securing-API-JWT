import  bAuth from 'express-basic-auth';
import { getAllUsers } from '../features/user/model/user.model.js'

const basicAuthMiddleware = (username, password) => {
  // Get all users
  const users = getAllUsers();

  //  Compare email
  const user = users.find((u) => bAuth.safeCompare(username, u.email));

  if (user) {
    // Compare password and return
    return bAuth.safeCompare(password, user.password);
  } else {
    return res.status(401).send('Unauthorized');;
  }
};

const authorizer = bAuth({
  authorizer: basicAuthMiddleware,
  challenge: true,
});

export default authorizer;