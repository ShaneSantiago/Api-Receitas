const receitaServices = require('../services/receitaServices');

const todasReceitas = async (req, res) => {
    try {
        const receitas = await receitaServices.listar();
        res.status(200).json(receitas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const receitaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const receita = await receitaServices.listarPorId(id);
        res.status(200).json(receita);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const criarReceita = async (req, res) => {
    try {
        const novaReceita = await receitaServices.criar(req.body);
        res.status(201).json(novaReceita);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const atualizarReceita = async (req, res) => {
    try {
        const { id } = req.params;
        const receita = await receitaServices.atualizar(id, req.body);
        res.status(200).json(receita);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deletarReceita = async (req, res) => {
    try {
        const { id } = req.params;
        await receitaServices.deletar(id);
        res.status(200).json({ message: 'Receita deletada com sucesso!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { todasReceitas, receitaPorId, criarReceita, atualizarReceita, deletarReceita }