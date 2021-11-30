const express = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const characters = require("./character");
const episodes = require("./character");
const location = require("./character");

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/character", characters);
router.use("/episode", episodes);
router.use("/location", episodes);

module.exports = router;
