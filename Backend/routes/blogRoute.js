const router = require('express')();
const BlogController = require('../controllers/blogController');
const {authentication,authorisation} = require('../middlewares/middle')

const blogController = new BlogController();

/**
 * @route       POST
 * @description Create Blog
 * @access      Private
 */
router.post('/createBlogs',authentication,blogController.createBlog.bind())


/**
 * @route       PUT
 * @description Update blog
 * @access      Private 
 */
router.put('/:blogId', authentication, blogController.updateBlog.bind())

/**
 * @route DELETE
 * @description Delete blog
 * @access Private
 */
router.delete('/:blogId', authentication, blogController.deleteBlog.bind())

/**
 * @route  GET
 * @description fetchUserBlog
 * @access Private
 */
router.get('/userBlogs', authentication, blogController.userBlog.bind());

//Public api
/**
 * @route        GET
 * @description  Fetch single doc
 * @access       Public
 */
router.get('/:blogId',authentication,blogController.getBlog.bind());

/**
 * @route       GET
 * @description Fetch doc by filter
 * @access      Public
 */
router.get('/', blogController.getQueryBlog.bind());


module.exports = router;  

