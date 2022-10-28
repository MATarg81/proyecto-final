const { User, Role } = require("../../db");


const verifyAdmin = async (req, res, next) => {
    try {
        const { email } = req.body;
        const userDb = await User.findOne({ where: { email: email }, include: Role });
        if(userDb){
            if(userDb.role === 'admin'){
                next()
            }
            res.status(403).send('No estas autorizado')
        }
    } catch (err) {
        res.status(403).send('No estas autorizado')
    }
};
const verifyInstructor = async (req, res, next) => {
    try {
        const { email } = req.body;
        const userDb = await User.findOne({ where: { email: email }, include: Role });
        if(userDb){
            if(userDb.role === 'instructor'){
                next()
            }
            res.status(403).send('No estas autorizado')
        }
    } catch (err) {
        res.status(403).send('No estas autorizado')
    }
};
const verifyCajero = async (req, res, next) => {
    try {
        const { email } = req.body;
        const userDb = await User.findOne({ where: { email: email }, include: Role });
        if(userDb){
            if(userDb.role === 'cajero'){
                next()
            }
            res.status(403).send('No estas autorizado')
        }
    } catch (err) {
        res.status(403).send('No estas autorizado')
    }
};

module.exports = {
    verifyAdmin,
    verifyCajero,
    verifyInstructor
  };