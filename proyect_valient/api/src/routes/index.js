const express = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const characters = require("./character");
const genresRoutes = require("./Genres");
const platformsRoute = require("./Platforms");
const { createImage, uploadImage2 } = require("./InserImage");

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/character", characters);
router.use("/genres", genresRoutes);
router.use("/platforms", platformsRoute);
router.use("/image", uploadImage2, createImage);
module.exports = router;
