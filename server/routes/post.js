const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

router.post('/create-post', postController.createNewPost);
router.post('/add-image', postController.addImageToPost);
router.get('/all', postController.allPost);
router.get('/circle/:id', postController.circlePosts);
router.get('/all/:id', postController.allPostByUser);
router.post('/like', postController.like);
router.post('/unlike', postController.unlike);
router.post('/comment', postController.comment);
router.delete('/delete', postController.deletePost);




module.exports = router;