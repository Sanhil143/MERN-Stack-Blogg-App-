const baseController = require('../controllers/baseController');
const userModel = require('../models/userModel')
const blogModel = require('../models/blogModel');
const commentModel = require('../models/commentModel');
const { isValidId } = require('../validations/validation')


class BlogController extends baseController {
      constructor() {
            super(blogModel, commentModel)
      }
      async createBlog(req, res) {
            let data = req.body;

            const { title, category } = data;

            if (!title) {
                  return res.status(400).send({ status: false, message: 'title is required' });
            }
            data.title = title.toLowerCase()
            if (!category) {
                  return res.status(400).send({ status: false, message: 'category is required' });
            }
            data.category = category.toLowerCase()
            data.userId = req.userId;
            let savedData = await blogModel.create(data);
            return res.status(201).send({ status: true, message: 'blog create successfully!', data: savedData })
      }

      async updateBlog(req, res) {
            let blogId = req.params.blogId;
            let data = req.body;
            if (!blogId || !isValidId(blogId)) {
                  return res.status(400).send({ status: false, message: 'blogId missing' })
            }
            if (!data) {
                  return res.status(400).send({ status: false, message: 'enter data for updation' })
            }
            const { title, category } = data;
            if (title !== undefined) {
                  data.title = title.toLowerCase();
            }
            if (category !== undefined) {
                  data.category = category.toLowerCase();
            }
            let updateData = await blogModel.findByIdAndUpdate({ _id: blogId, isDeleted: false }, { $set: { ...data } }, { new: true });
            if (updateData == null) {
                  return res.status(400).send({ status: false, message: 'please enter valid blogId' })
            }
            return res.status(200).send({ status: true, message: 'data update successfully', data: updateData })
      }
      async deleteBlog(req, res) {
            try {
                  let blogId = req.params.blogId;
                  if (!blogId || !isValidId(blogId)) {
                        return res.status(400).send({ status: false, message: 'blogId missing' })
                  }
                  let deleteData = await blogModel.findByIdAndUpdate({ _id: blogId, isDeleted: false },
                        { $set: { isDeleted: true, deletedAt: Date.now() } })
                  if (!deleteData) {
                        return res.status(404).send({ status: false, message: 'resource not found to be deleted' })
                  }
                  if (deleteData.isDeleted == true) {
                        return res.status(400).send({ status: false, message: 'already deleted' })
                  }
                  return res.status(200).send({ status: true, message: 'deleted successfullty' })
            } catch (err) {
                  return res.status(500).send({ status: false, message: err.message })
            }
      }



      //public api
      async getBlog(req, res) {
            try {
                  let blogId = req.params.blogId;
                  console.log(blogId);
                  if (!blogId) {
                        return res.status(400).send({ status: false, message: 'blogId is required' })
                  }
                  if (!isValidId(blogId)) {
                        return res.status(400).send({ status: false, message: 'invalid blogId' })
                  }
                  let findData = await blogModel.findOne({ _id: blogId }).lean()

                  if (findData == null || findData.isDeleted == true || findData.isPublished == false) {
                        return res.status(404).send({ status: false, message: 'resource is not available' })
                  }
                  let commentData = await commentModel.find({ blogId: findData._id, isDeleted: false })
                        .select({ createdAt: 0, updatedAt: 0, __v: 0 })
                  findData.commentData = commentData;
                  return res.status(200).send({ status: true, data: findData })

            } catch (err) {
                  return res.status(500).send({ status: false, message: err.message })
            }
      }

      async getQueryBlog(req, res) {
            try {
                  let data = req.query;
                  if (data) {
                        const { title, category, userId } = data;
                        let obj = { isDeleted: false, isPublished: true }
                        if (title) {
                              obj.title = title.toLowerCase();
                        }
                        if (category !== undefined) {
                              obj.category = category.toLowerCase();
                        }

                        if (userId !== undefined) {
                              obj.userId = userId;
                        }
                        let findData = await blogModel.find(obj).sort({publishedAt:-1})
                        if (findData.length == 0) {
                              return res.status(404).send({ status: false, message: 'resource not found' })
                        }
                        return res.status(200).send({ status: true, message: 'blogs', data: findData })
                  
                        return res.status(200).send({ status: true, message: 'blogs', data: findData })
                  }
            } catch (err) {
                  return res.status(500).send({ status: false, message: err.message });
            }
      }


}
module.exports = BlogController;