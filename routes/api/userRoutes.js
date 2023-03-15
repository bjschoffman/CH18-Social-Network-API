const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController.js');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/courses/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/courses/:friendId  
router
  .route('/:friendId')
  .post(addFriend)
  .delete(deleteFriend);
  
module.exports = router