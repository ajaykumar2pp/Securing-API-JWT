// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken"

const jwtAuth = (req, res, next) => {

    const token = req.header('Authorization');
    console.log(token);

    // Check if token exists and starts with 'Bearer '
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, msg: 'Token missing or malformed' });
    }

    const bearerToken = token.split(' ')[1];

    // verify the token
    try {
        const payload = jwt.verify(
            bearerToken,
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
