const router = require('express')();
const BlogController = require('../controllers/blogController');
const {authentication,authorisation} = require('../middlewares/auth')

const blogController = new BlogController();

/**
 * @route       POST
 * @description Create Blog
 * @access      Private
 */
router.post('/createBlogs',authentication,authorisation,blogController.createBlog.bind())


//Public api
/**
 * @route        GET
 * @description  Fetch single doc
 * @access       Public
 */
router.get('/:blogId',blogController.getBlog.bind());


module.exports = router;  

