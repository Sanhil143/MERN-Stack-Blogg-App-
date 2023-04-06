const baseController = require('../controllers/baseController');
const blogModel = require('../models/blogModel');


class BlogController extends baseController{
      constructor(){
            super(blogModel)
      }
      async createBlog(req,res){

      }
}
module.exports = BlogController;