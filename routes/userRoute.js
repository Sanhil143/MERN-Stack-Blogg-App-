const router = require("express")()

const UserController = require("../controllers/userController");
const userController = new UserController();

/**
 * @route   POST users
 * @desc    Register User
 * @access  Public
 */
router.post("/", userController.createUser.bind(userController));

module.exports = router;
