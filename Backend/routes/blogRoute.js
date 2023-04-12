const router = require('express')();
const BlogController = require('../controllers/blogController');
const {authentication,authorisation} = require('../middlewares/auth')

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
router.put('/:userId/:blogId', authentication,authorisation, blogController.updateBlog.bind())

/**
 * @route DELETE
 * @description Delete blog
 * @access Private
 */
router.delete('/:userId/:blogId', authentication,authorisation, blogController.deleteBlog.bind())

//Public api
/**
 * @route        GET
 * @description  Fetch single doc
 * @access       Public
 */
router.get('/:blogId',blogController.getBlog.bind());

/**
 * @route       GET
 * @description Fetch doc by filter
 * @access      Public
 */
router.get('/', blogController.getQueryBlog.bind());


module.exports = router;  

