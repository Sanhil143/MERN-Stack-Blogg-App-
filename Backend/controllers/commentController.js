const baseController = require('../controllers/baseController')
const commentModel = require('../models/commentModel')
const blogModel = require('../models/blogModel');
const { isValidId } = require('../validations/validation');


class CommentController extends baseController {
      constructor() {
            super(commentModel, blogModel)
      }
      async createComment(req, res) {
            let data = req.body;
            if (!data) {
                  return res.status(400).send({ status: false, message: 'provide data' })
            }
            const {comment,commentedBy,blogId} = data
            if (!blogId) {
                  return res.status(400).send({ status: false, message: 'blogId is required' })
            }
            if (!isValidId(blogId)) {
                  return res.status(400).send({ status: false, message: 'enter valid blogId' })
            }
            let findBlog = await blogModel.findOne({ _id: blogId, isDeleted: false })
                  if (!findBlog && findBlog == null) {
                        return res.status(400).send({ status: false, message: 'Blog has been deleted' })
                  }
            if (commentedBy.trim() !== undefined) {
                  if (commentedBy === Number && commentedBy === Object) {
                        return res.status(400).send({ status: false, message: 'please enter your valid name' })
                  }
            }
            if (!comment) {
                  return res.status(400).send({ status: false, message: 'comment is required' })
            }
            if (comment.trim() !== undefined) {
                  if (commentedBy === Number && commentedBy === Object) {
                        return res.status(400).send({ status: false, message: 'please enter your valid name' })
                  }
                  data.comment = comment.toLowerCase()
            }
            data.comment.toLowerCase();
            let saved = await commentModel.create(data);
            let updateComment;
            if (saved) {
                  updateComment = await blogModel.findByIdAndUpdate({ _id: blogId }, { $inc: { comments: +1 } }, { new: true })
            }
            return res.status(201).send({ status: true, message: 'comment created successfully' })
      }



      async updateComment(req, res) {
            try {
                  let blogId = req.params.blogId;
                  let commentId = req.params.commentId;
                  let data = req.body;
                  if (!blogId) {
                        return res.status(400).send({ status: false, message: 'blogId is required' })
                  }
                  if (!isValidId(blogId)) {
                        return res.status(400).send({ status: false, message: 'enter valid blogId' })
                  }
                  let findBlog = await blogModel.findOne({ _id: blogId, isDeleted: false })
                  if (!findBlog && findBlog == null) {
                        return res.status(400).send({ status: false, message: 'Blog has been deleted' })
                  }
                  if (!commentId) {
                        return res.status(400).send({ status: false, message: 'commentId is required' })
                  }
                  if (!isValidId(commentId)) {
                        return res.status(400).send({ status: false, message: 'enter valid commentId' })
                  }
                  if (!data) {
                        return res.status(400).send({ status: false, message: 'provide data for updation' })
                  }
                  const { commentedBy, comment } = data;
                  if (commentedBy.trim() !== undefined) {
                        if (commentedBy === Number && commentedBy === Object) {
                              return res.status(400).send({ status: false, message: 'please enter your valid name' })
                        }
                  }
                  if (comment.trim() !== undefined) {
                        if (commentedBy === Number && commentedBy === Object) {
                              return res.status(400).send({ status: false, message: 'please enter your valid name' })
                        }
                        comment = comment.toLowerCase()
                  }
                  let updated = await commentModel.findOneAndUpdate({_id:commentId,isDeleted:false},
                        {$set:{...data,updatedAt:Date.now()}},{new:true})
                   if(!updated && updated == null){
                        return res.status(404).send({status:false, message:'comment not found'})
                   }     
                  return res.status(200).send({status:true, message:'comment updated successfully',data:updated})      
            } catch (err) {
                  return res.status(500).send({ status: false, message: err.message })
            }
      }



      async deleteComment(req, res) {
            try {
                  let blogId = req.params.blogId;
                  let commentId = req.params.commentId;
                  if (!blogId) {
                        return res.status(400).send({ status: false, message: 'blogId is required' })
                  }
                  if (!isValidId(blogId)) {
                        return res.status(400).send({ status: false, message: 'enter valid blogId' })
                  }
                  let findBlog = await blogModel.findOne({ _id: blogId, isDeleted: false })
                  if (!findBlog && findBlog == null) {
                        return res.status(400).send({ status: false, message: 'Blog has been deleted' })
                  }
                  if (!commentId) {
                        return res.status(400).send({ status: false, message: 'commentId is required' })
                  }
                  if (!isValidId(commentId)) {
                        return res.status(400).send({ status: false, message: 'enter valid commentId' })
                  }
                  let deletedComm = await commentModel.findByIdAndUpdate({ _id: commentId }, { $set: { isDeleted: true, deleteAt: Date.now() } });
                  if (!deletedComm && deletedComm == null) {
                        return res.status(404).send({ status: false, message: 'resource not found' })
                  }
                  if (deletedComm.isDeleted == true) {
                        return res.status(400).send({ status: false, message: 'comment is already deleted' })
                  }
                  let updated;
                  if (deletedComm) {
                        updated = await blogModel.findByIdAndUpdate({ _id: blogId }, { $inc: { comment: -1 } })
                  }
                  return res.status(200).send({ status: true, message: 'comment deleted successfully' })
            } catch (err) {
                  return res.status(500).send({ status: false, message: err.message })
            }
      }

      async getComment(req,res){
            try {
                  let commentData = await commentModel.find({isDeleted:false}).sort({createdAt:-1})
                  return res.status(200).send({status:true, data:commentData});
            } catch (err) {
                  return res.status(500).send({status:false, message: err.message});
            }
      }
}


module.exports = CommentController;