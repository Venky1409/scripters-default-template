import adminController from '../controllers/adminController';

exports.appRoute = router => {
  	router.get("/profile", adminController.getAdminProfile);
};