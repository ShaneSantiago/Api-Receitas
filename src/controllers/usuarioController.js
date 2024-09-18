const usuarioServices = require('../services/usuarioServices');

const todosUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioServices.listar();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const criarUsuario = async (req, res) => {
    try {
        const novoUsuario = await usuarioServices.criar(req.body);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await usuarioServices.atualizar(id, req.body);
        res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deletarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await usuarioServices.deletar(id);
        res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const loginUsuario = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await usuarioServices.login(email, senha);
        res.status(200).json({ message: 'Login bem-sucedido', usuario });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

module.exports = { todosUsuarios, criarUsuario, atualizarUsuario, deletarUsuario, loginUsuario }