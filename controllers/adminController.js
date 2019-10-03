import adminModel from '../models/adminModel';

exports.getAdminProfile = (req, res, next) => {
  const profile = adminModel.getProfile();
  res.json(profile);
};