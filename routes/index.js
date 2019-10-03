import adminController from '../controllers/adminController';
import path from 'path';

exports.appRoute = router => {
	router.get("/profile", adminController.getAdminProfile);
};