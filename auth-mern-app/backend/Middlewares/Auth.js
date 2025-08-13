const jwt = require("jsonwebtoken");
const ensureAuthenticated = (req, res, next) => {
    const auth  = req.headers["authorization"];
    if(!auth){
        return res.status(403)
        .json({msg: "Unauthorized, JWT token is require"})
    }
    
    try {
        const decodedData = jwt.verify(auth, process.env.JWT_SECRET) ;
        req.user = decodedData;
        
        next();
    } catch (error) {
        return res.status(401)
        .json({msg: "Unauthorized, JWT token is wrong or exxpired"})
        
    }
}
module.exports = ensureAuthenticated;