// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken"

const jwtAuth = (req, res, next) => {

    const token = req.headers['authorization'];
    console.log("token Get ====>\n", token);

    // Check if token exists and extract it from the header
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).send('Unauthorized');
    }

    // Remove 'Bearer ' from the token string
    const bearerToken = token.split(' ')[1];

    // verify the token
    try {
        const payload = jwt.verify(
            bearerToken,
            'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz'
        );
        console.log(payload);

        req.user = payload;
        next();  // call the next middleware
    } catch (err) {
        console.log(err);
        return res.status(401).json({ success: false, msg: 'Invalid or expired token' });
    }
};

export default jwtAuth;

// 1. Authorization
// 2. Bearer Token
// 3. Paste Token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpamF5QGdtYWlsLmNvbSIsImlhdCI6MTcyOTIyMDUxNiwiZXhwIjoxNzI5MjI0MTE2fQ.BSQ0Ya7LV_dF1pGCNsAB1uGDYcoNINEj4IWlNqKPRA4
// 4. Send Button Click

// Another way
// 1.Headers section click
// 2. Key =Authorization
//  Value =eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpamF5QGdtYWlsLmNvbSIsImlhdCI6MTcyOTIyMDUxNiwiZXhwIjoxNzI5MjI0MTE2fQ.BSQ0Ya7LV_dF1pGCNsAB1uGDYcoNINEj4IWlNqKPRA4
// 3. Send Button Click