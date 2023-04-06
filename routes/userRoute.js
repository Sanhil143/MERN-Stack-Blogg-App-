const router = require("express")()

const UserController = require("../controllers/userController");
const userController = new UserController();

/**
 * @route   POST 
 * @desc    Register User
 * @access  Public
 */
router.post("/signup",userController.createUser.bind());

/**
 * @route   POST /signin
 * @desc    Login User
 * @access  Public
 */
router.post('/signin',userController.loginUser.bind());


// /**
//  * @route   POST /signin
//  * @desc    Login User
//  * @access  Public
//  */
// router.post('/signin',userController.loginUser.bind());


module.exports = router;
