// import adminController from '../controllers/adminController';
const adminController = require('../controllers/adminController');

exports.appRoute = router => {
	router.get("/profile", adminController.getAdminProfile);
};