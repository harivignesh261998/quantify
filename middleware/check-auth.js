 const jwt = require('jsonwebtoken');

 module.exports = (req,res,next) => {
    try{
        console.log('cameeee',req.headers.authorization)
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'secrete_this_should_be_longer')
        req.userData = {
            userId: decoded.userId
        }
        next();
    } catch (err) {
        res.status(401).json({message: "Unauthorised request"})
    }
 };