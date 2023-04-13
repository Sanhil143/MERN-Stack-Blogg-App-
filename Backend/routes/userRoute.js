const router = require("express")()
const Middleware = require('../middlewares/middle')
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


/** 
 * @route   GET
 * @desc    Get all user
 * @access  Public
 */
router.get('/getUser',Middleware.authentication,userController.getUser.bind());


module.exports = router;
