const database = require('../models');

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async pegaTodosOsRegistros() {
        return await database[this.nomeDoModelo].findAll();
    }

    async pegaUmRegistro(id) {
        return await database[this.nomeDoModelo].findOne({ where: { id: Number(id) } });
    }

    async criaRegistro(dados) {
        return await database[this.nomeDoModelo].create(dados);
    }

    async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
        return await database[this.nomeDoModelo].update(dadosAtualizados, { where: { id: Number(id) } }, transacao);
    }

    async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
        return await database[this.nomeDoModelo].update(dadosAtualizados, { where: { ...where } }, transacao);
    }

    async apagaRegistro(id) {
        return await database[this.nomeDoModelo].destroy({ where: { id: Number(id) } });
    }
}

module.exports = Services;
