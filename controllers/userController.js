const BaseController = require("./baseController");
const userModel = require('../models/userModel')
const cryptoJs = require('crypto-js')



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
      if (!lastName) {
        return res.status(400).send({ status: false, message: "please enter your Lastname!" });
      }
      if (!email) {
        return res.status(400).send({ status: false, message: "please enter your email!" });
      }
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
      return res.status(400).send({status:false, message:"please provide your email!"})
    }
    if(!password){
      return res.status(400).send({status:false, message:"please provide your passsword!"})
    }
    
  }
}

module.exports = UserController;
