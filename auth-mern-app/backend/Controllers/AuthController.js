const UserModel = require("../Models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    try {
        const {name, email,password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
             return res.status(409)
            .json({msg : "User exists, try logging in", success: false});
        }
        const userModel = new UserModel({name, email, password});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(200).json({
            msg : "user got signed in"
        })
        
    } catch (error) {
        res.status(500).json({
            msg : "Internal Server Error",
            success: false
        })
        
    }
}

const login = async(req, res) => {
    const { email, password } = req.body;
    const user = await  UserModel.findOne({email});
    const errorMessage = "User not found , email or password is incorrect"
    if (!user) {
        return res.status().json({
            msg : errorMessage,
            success:false
        })
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
        return res.status(403).json({
            msg : errorMessage, success: false
        })
        
    }
    
    const jwtToken = jwt.sign(
        {email : user.email, _id : user._id},
        process.env.JWT_SECRET,
        { expiresIn : "24h" }
    );

    res.status(200)
      .json({
        message : "login success",
        success : true,
        email,
        jwtToken,
        name : user.name


      })

}


module.exports = {
    signup,
    login
};