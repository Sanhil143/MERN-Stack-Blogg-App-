const baseController = require('../controllers/baseController')
const commentModel = require('../models/commentModel')
const blogModel = require('../models/blogModel');
const { isValidId } = require('../validations/validation');


class CommentController extends baseController{
      constructor(){
            super(commentModel,blogModel)
      }
      async createComment(req,res){
            let blogId = req.params.blogId;
            let data = req.body;

            if(!blogId){
                  return res.status(400).send({status:false, message:'blogId is required'})
            }
            if(!isValidId(blogId)){
                  return res.status(400).send({status:false, message:'enter valid blogId'})
            }
            if(!data.comment){
                  return res.status(400).send({status:false, message:'comment is required'})
            }
      }
}