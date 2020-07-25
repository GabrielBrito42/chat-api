const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Servidor esta pronto e rodando');
});

module.exports = router;