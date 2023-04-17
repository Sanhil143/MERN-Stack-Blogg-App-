const BaseController = require("./baseController");
const userModel = require('../models/userModel')
//Packages
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')



class UserController extends BaseController {
  constructor() {
    super(userModel);
  }
  async createUser(req, res) {
    try {
      let data = req.body;
      //Destructure all fields
      const { firstName, lastName, email, password } = data;

      if (!firstName) {
        return res.status(400).send({ status: false, message: "please enter your Firstname!" });
      }
      if(firstName != undefined){
        firstName.trim()
      }
      if (!lastName) {
        return res.status(400).send({ status: false, message: "please enter your Lastname!" });
      }
      if(lastName != undefined){
        lastName.trim()
      }
      if (!email) {
        return res.status(400).send({ status: false, message: "please enter your email!" });
      }
      // email.toLowerCase()
      let verifyEmail = await userModel.findOne({ email: email });
      if (verifyEmail) {
        return res.status(400).send({ status: false, message: "email is already in use, please enter another!" });
      }
      if (!password) {
        return res.status(400).send({ status: false, message: "please enter your password" });
      }

      data.password = cryptoJs.AES.encrypt(password, "Sanhil").toString();

      let savedData = await userModel.create(data);
      return res.status(201).send({ status: true, message: "Account created successfully", data: savedData });
    } catch (err) {
      return res.status(400).send({ status: false, message: err.message });
    }
  }

  async loginUser(req,res){
    let data = req.body;
    //Destructuring
    const {email, password} = data;
    if(!email){
      return res.status(400).send({status:false, message:"please provide your email!"});
    }
    if(!password){
      return res.status(400).send({status:false, message:"please provide your passsword!"});
    }
    let verifyEmail = await userModel.findOne({email:email});
    if(!verifyEmail){
      return res.status(400).send({status:false, message:"Please enter your valid email!"});
    }
    let hashPass = cryptoJs.AES.decrypt(verifyEmail.password, 'Sanhil');
    let mainPass = hashPass.toString(cryptoJs.enc.Utf8);

    if(mainPass !== password){
      return res.status(400).send({status:false, message:"Please enter your valid password"});
    }
    let token = jwt.sign({userId:verifyEmail._id}, "Sanhil");
    let container = {userId:verifyEmail._id, Token:token};

    return res.status(200).send({status:true, message:"Account successfully login!", data:container});
  }


  async getUser(req,res){
    try{
      let userId = req.userId
      let findData = await userModel.findById(userId).select('-password')
      return res.status(200).send({status:true, data:findData})
    }catch(err){
      return res.status(500).send({status:false, message:err.message})
    }
  }
}

module.exports = UserController;
