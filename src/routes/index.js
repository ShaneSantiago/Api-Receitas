const express = require('express');
const usuarios = require('./usuarioRoutes');
const receitas = require('./receitaRoutes');

module.exports = (app) => {
    app.use(
        express.json(),
        usuarios,
        receitas
    )
}