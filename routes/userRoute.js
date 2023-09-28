const { fetchUserPost, fetchUserData } = require('../controller/userController');

const router = require('express').Router();




router.get('/fetch-users',fetchUserData);

// Fetch user posts from the DummyAPI and store them in the database
router.get('/fetch-user-posts', fetchUserPost);
  

module.exports = router;