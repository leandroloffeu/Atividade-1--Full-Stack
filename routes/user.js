const express = require('express');
const { getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/users', authenticateToken, getAllUsers);
router.put('/user', authenticateToken, updateUser);
router.delete('/user', authenticateToken, deleteUser);

module.exports = router;
