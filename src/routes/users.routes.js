const express = require("express");

const router = express.Router();

// Importaciones de los controladores del usuario
const userControl = require("../controllers/users.controller");

// Direccion en PostMan
// http://localhost:3000/api/users

// Rutas para el usuario
router.route("/signup").post(userControl.signup);

router.route("/login").post(userControl.login);

router.route("/:id").get(userControl.logout);

router.route("/:id").delete(userControl.updateUser);

router.route("/:id").put(userControl.disableUser);

router.route("/:orders").get(userControl.getOrderByUser);

router.route("/orders/:id").get(userControl.getOrderById);

module.exports = router;
