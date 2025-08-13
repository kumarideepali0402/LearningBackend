const z = require("zod");

const  signupValidation = (req, res, next) => {
    const schema = z.object({
        name:z.string().min(3).max(100),
        email: z.string().email(),
        password : z.string().min(8)
    })
    // schema validation
    const result = schema.safeParse(req.body);
    
    if(!result.success) {
        return res.status(400).json({
            errors :  result.error.errors
        })
    }
    next();
}


const loginValidation = (req, res, next) => {
    const schema = z.object({
       
        email : z.string().email(),
        password : z.string().min(8)
    })

    // validating the schema
    const result = schema.safeParse(req.body);

    if(!result.success){
        return res.status(400).json({
            errors : result.error.errors
        })
    }
    next();
}

module.exports = {
    signupValidation,
    loginValidation
}


