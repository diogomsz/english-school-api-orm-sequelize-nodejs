const database = require('../models');

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async pegaTodosOsRegistros() {
        try {
            return await database[this.nomeDoModelo].findAll();
        } catch (error) {
            return error.message;
        }
    }
    async pegaUmRegistro(id) {
        try {

        } catch(error) {
            return error.message;
        }
    }

    async criaRegistro(dados) {
        try {

        } catch(error) {
            return error.message;
        }
    }

    async atualizaRegistro(dadosAtualizados, id) {
        try {

        } catch(error) {
            return error.message;
        }
    }

    async apagaRegistro(id) {
        try {

        } catch(error) {
            return error.message;
        }
    }
}

module.exports = Services;
