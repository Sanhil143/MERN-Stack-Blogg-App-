const router = require('express')()
const CommentController = require('../controllers/commentController')

const commentController = new CommentController()

/**
 * @route        POST
 * @description  Create comment
 * @access       Public
 */
router.post('/', commentController.createComment.bind())


/**
 * @route       PUT
 * @description Update comment
 * @access      Public
 */
router.put('/:blogId/:commentId' , commentController.updateComment.bind())

/**
 * @route        DELETE
 * @description  Delete comment
 * @access       Public
 */
router.delete('/:blogId/:commentId', commentController.deleteComment.bind())



module.exports = router;