const { Router } = require('express')
const { todasReceitas, criarReceita, atualizarReceita, deletarReceita, receitaPorId } = require('../controllers/receitasController')

const router = Router()

router.get("/receitas", todasReceitas)
router.get("/receitas/:id", receitaPorId)
router.post("/receitas", criarReceita)
router.put("/receitas/:id", atualizarReceita)
router.delete("/receitas/:id", deletarReceita)

module.exports = router