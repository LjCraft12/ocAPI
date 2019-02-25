const express = require('express'),
    router = express.Router();

const feedController = require('../controllers/feed');

router.get('/posts', feedController.getPosts);
router.post('/post', feedController.postNewPost);

module.exports = router;