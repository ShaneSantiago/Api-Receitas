const { Router } = require('express')
const { todosUsuarios, criarUsuario, atualizarUsuario, deletarUsuario, loginUsuario } = require('../controllers/usuarioController')

const router = Router()

router.get("/usuarios", todosUsuarios)
router.post("/usuarios", criarUsuario)
router.put("/usuarios/:id", atualizarUsuario)
router.post("/usuarios/login", loginUsuario)
router.delete("/usuarios/:id", deletarUsuario)

module.exports = router