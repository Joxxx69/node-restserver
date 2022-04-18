const express = require('express');
const router = express.Router();
const controllers = require('../controllers/user.controllers');

router.get('/get',controllers.usuariosGet);
router.put('/put',controllers.usuariosPut);
router.post('/post',controllers.usuariosPost);
router.delete('/delete',controllers.usuariosDelete);


module.exports = router;


