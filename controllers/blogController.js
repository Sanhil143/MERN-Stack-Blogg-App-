const baseController = require('../controllers/baseController');
const blogModel = require('../models/blogModel');
const {isValidId} = require('../validations/validation')


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
            return res.status(201).send({status:true, message:'blog create successfully!', data:savedData})
      }










      //public api
      async getBlog(req,res){
            try{
            let blogId = req.params.blogId;
            console.log(blogId);
            if(!blogId){
                  return res.status(400).send({status:false, message:'blogId is required'})
            }
            if(!isValidId(blogId)){
                  return res.status(400).send({status:false, message:'invalid blogId'})
            }
            let findData = await blogModel.findOne({_id:blogId})
      
            if( findData == null || findData.isDeleted == true || findData.isPublished == false){
                  return res.status(404).send({status:false,message:'resource is not available'})
            }
            return res.status(200).send({status:true, data:findData})

            }catch(err){
                  return res.status(500).send({status:false, message:err.message})
            }
      }

      async getQueryBlog(req,res){
            let query = req.query;
            
      }


}
module.exports = BlogController;