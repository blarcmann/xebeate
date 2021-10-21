const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

router.post('/create-post', postController.createNewPost);
router.post('/add-image', postController.addImageToPost);
router.get('/all-post/', postController.allPost);
router.get('/all-post-following/:id', postController.allPostByFollowing);
router.get('/all-post/:id', postController.allPostByUser);
router.post('/like', postController.like);
router.post('/unlike', postController.unlike);
router.post('/comment', postController.comment);
router.post('/delete', postController.deletePost);

module.exports = router;