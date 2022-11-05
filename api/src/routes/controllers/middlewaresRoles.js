const { User, Role } = require("../../db");


const verifyAdmin = () => {
    return async (req,res,next) => {
        const { email } = req.body;
        const userDb = await User.findOne({ where: { email: email }, include: Role});
        
        if(userDb.role.name === 'Admin'){
                next()  
        } else {
            return  res.status(403).send('No estas autorizado')
        }   
    }
};
const verifySuperAdmin = () => {
    return async (req,res,next) => {
        const { email } = req.body;
        const userDb = await User.findOne({ where: { email: email }, include: Role});
        
        if(userDb.role.name === 'SuperAdmin'){
                next()  
        } else {
            return  res.status(403).send('No estas autorizado')
        }   
    }
};


module.exports = {
    verifyAdmin,
    verifySuperAdmin,
  };