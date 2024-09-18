const database = require('../models');

const listar = async () => {
    const usuarios = await database.Usuario.findAll();
    return usuarios;
};

const criar = async (dados) => {
    const usuario = await database.Usuario.create(dados);
    return usuario;
};

const atualizar = async (id, dados) => {
    const usuario = await database.Usuario.update(dados, { where: { id } });
    return usuario;
};

const deletar = async (id) => {
    const usuario = await database.Usuario.destroy({ where: { id } });
    return usuario;
};

const login = async (email, senha) => {
    const usuario = await database.Usuario.findOne({ where: { email } });

    if (!usuario || usuario.senha !== senha) {
        throw new Error('Email ou senha incorretos');
    }

    return usuario;
};

module.exports = { listar, criar, atualizar, deletar, login }