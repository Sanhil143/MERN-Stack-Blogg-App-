const baseController = require('../controllers/baseController');
const blogModel = require('../models/blogModel');
const { isValidId } = require('../validations/validation')


class BlogController extends baseController {
      constructor() {
            super(blogModel)
      }
      async createBlog(req, res) {
            let data = req.body;

            const { title, category,subcategory } = data;

            if (!title) {
                  return res.status(400).send({ status: false, message: 'title is required' });
            }
            data.title = title.toLowerCase()
            if (!category) {
                  return res.status(400).send({ status: false, message: 'category is required' });
            }
            data.category = category.toLowerCase()
            if(subcategory){
                  subcategory = subcategory.toLowerCase()
            }
            let savedData = await blogModel.create(data);
            return res.status(201).send({ status: true, message: 'blog create successfully!', data: savedData })
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
                  let findData = await blogModel.findOne({ _id: blogId })

                  if (findData == null || findData.isDeleted == true || findData.isPublished == false) {
                        return res.status(404).send({ status: false, message: 'resource is not available' })
                  }
                  return res.status(200).send({ status: true, data: findData })

            } catch (err) {
                  return res.status(500).send({ status: false, message: err.message })
            }
      }

      async getQueryBlog(req, res) {
            try {
                  let data = req.query;
                  const { title, category, subcategory, userId } = data;
                  let obj = { isDeleted: false, isPublished: true }
                  if (title) {
                        obj.title = title.toLowerCase();
                  }
                  if (category !== undefined) {
                        obj.category = category.toLowerCase();
                  }
                  if (subcategory !== undefined) {
                        obj.subcategory = subcategory.toLowerCase();
                  }
                  if (userId !== undefined) {
                        obj.userId = userId;
                  }
                  let findData = await blogModel.find(obj)
                  if(findData.length == 0){
                        return res.status(404).send({status:false, message:'resource not found'})
                  }
                  return res.status(200).send({ status: true, message: 'blogs', data: findData })
            } catch (err) { 
                  return res.status(500).send({ status: false, message: err.message });
            }
      }


}
module.exports = BlogController;