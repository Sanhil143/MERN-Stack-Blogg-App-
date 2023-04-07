const baseController = require('../controllers/baseController');
const blogModel = require('../models/blogModel');


class BlogController extends baseController{
      constructor(){
            super(blogModel)
      }
      async createBlog(req,res){
            let data = req.body;

            const{title,category} = data;

            if(!title){
                  return res.status(400).send({status:false, message:'title is required'});
            }
            if(!category){
                  return res.status(400).send({status:false,message:'category is required'});
            }

            let savedData  = await blogModel.create(data);
            return res.status(201).send({status:true, message:'blog create successfully!', savedData})
      }
}
module.exports = BlogController;