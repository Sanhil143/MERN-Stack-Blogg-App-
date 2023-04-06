const router = require('express')();
const BlogController = require('../controllers/blogController');
const Middleware = require('../middlewares/authentication')

const blogController = new BlogController();

/**
 * @route       POST
 * @description Create Blog
 * @access      Private
 */
router.post('/createBlogs', Middleware.auth, blogController.createBlog.bind())



module.exports = router; 

