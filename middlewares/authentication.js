const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


const auth = (req, res, next) => {
      let token = req.headers('x-auth-key');
      if (!token) {
            return res.status(401).send({ status: false, message: "token is missing, Authentication denied!" });
      }
      try {
            let decoded = jwt.verify(token, 'Sanhil');
            req.user = decoded.user;
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
            if (!mongoose.Schema.Types.ObjectId(userId)) {
                  return res.status(400).send({ status: false, message: 'invalid userId' })
            }
            if(req.user !== userId){
                  return res.status(403).send({status:false,message:'Authenticatio denied'})
            }else{
                  next();
            }
      } catch (err) {
            return res.status(500).send({ status: false, message: err.message });
      }

}


module.exports = { auth, authorisation }