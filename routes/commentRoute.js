const router = require('express')()
const CommentController = require('../controllers/commentController')

const commentController = new CommentController()

/**
 * @route        POST
 * @description  Create comment
 * @access       Public
 */
router.post('/:blogId',commentController.createComment.bind())


/**
 * @route        DELETE
 * @description  Delete comment
 * @access       Public
 */
router.delete('/:blogId', commentController.deleteComment.bind())



module.exports = router;