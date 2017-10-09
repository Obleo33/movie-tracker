var express = require('express');
var db = require('./queries');

var router = express.Router();

router.get('/users', db.getAllUsers)
router.post('/users', db.signIn) // must have a body with email and password
router.post('/users/new', db.createUser)
router.post('/users/favorites/new', db.addFavorite)
router.get('/users/:id/favorites', db.getAllFavorites)
router.delete('/users/:id/favorites/:movie_id', db.deleteFavorite)

module.exports = router;
