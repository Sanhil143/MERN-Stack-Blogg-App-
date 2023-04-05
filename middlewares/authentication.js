const jwt = require('jsonwebtoken');


const auth = (req,res,next) => {
      let token = req.headers('x-auth-key');
      if(!token){
            return res.status(401).send({status:false, message:"token is missing, Authentication denied!"});
      }
      try{
            let decoded = jwt.verify(token, 'Sanhil');
            req.user = decoded.user;
            next()
      }catch(err){
            return res.status(500).send({status:false, message:err.message});
      }
}


module.exports = {auth}