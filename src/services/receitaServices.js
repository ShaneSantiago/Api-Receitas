const database = require('../models');

const listar = async () => {
    const receitas = await database.Receita.findAll();
    return receitas;
};

const listarPorId = async (id) => {
    return await database.Receita.findByPk(id, {
        include: [
            {
                model: database.Usuario,
                as: 'usuarios',
                attributes: ['nome']
            }
        ]
    });
};

const criar = async (dados) => {
    const receita = await database.Receita.create(dados);
    return receita;
};

const atualizar = async (id, dados) => {
    const receita = await database.Receita.update(dados, { where: { id } });
    return receita;
};

const deletar = async (id) => {
    const receita = await database.Receita.destroy({ where: { id } });
    return receita;
};

module.exports = { listar, listarPorId, criar, atualizar, deletar }