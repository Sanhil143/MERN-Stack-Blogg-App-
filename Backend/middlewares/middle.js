const jwt = require('jsonwebtoken');
const {isValidId} = require('../validations/validation')


const authentication = (req, res, next) => {
      let token = req.header('x-auth-key');
      if (!token) {
            return res.status(401).send({ status: false, message: "token is missing, Authentication denied!" });
      }
      try {
            let decoded = jwt.verify(token, 'Sanhil');
            req.userId = decoded.userId;
            // console.log(req.userId);
            next()
      } catch (err) {
            return res.status(500).send({ status: false, message: err.message });
      }
}

const authorisation = (req, res, next) => {

      try {
            let userId = (req.params.userId || req.body.userId);
            if(!userId){
                  return res.status(400).send({status:false, message:'userId is required'});
            }
            if (!isValidId(userId)) {
                  return res.status(400).send({ status: false, message: 'invalid userId' })
            }
            

            if(req.userId !== userId){
                  return res.status(403).send({status:false,message:'Authorization denied'})
            }else{
                  next();
            }
      } catch (err) {
            return res.status(500).send({ status: false, message: err.message });
      }

}


module.exports = { authentication}