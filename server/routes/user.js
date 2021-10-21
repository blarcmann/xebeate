const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');


router.get('/profile/:user_id', userController.userDetails)
router.get('/circle/:user_id', userController.getCircle)
router.post('/follow', userController.follow)
router.post('/unfollow', userController.unfollow)
router.post('/search', userController.search)

module.exports = router;