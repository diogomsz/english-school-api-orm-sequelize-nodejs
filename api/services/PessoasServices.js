const Services = require('./Services');
const database = require('../models');

class PessoasServices extends Services {
    constructor() {
        super('Pessoas');
        this.matriculas = new Services('Matriculas');
    }

    async pegaRegistrosAtivos(where = {}) {
        return await database[this.nomeDoModelo].findAll({  where: { ...where } });
    }

    async pegaTodosOsRegistros(where = {}) {
        return await database[this.nomeDoModelo].scope('todos').findAll({  where: { ...where } });
    }
    
    async cancelaPessoaEMatriculas(estudanteId) {
        return database.sequelize.transaction(async transacao => {
            await super.atualizaRegistro({ ativo: false }, estudanteId, { transaction: transacao });
            await this.matriculas.atualizaRegistros({ status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transacao });
        });
    }

    // métodos específicos do controlador de Pessoas
}

module.exports = PessoasServices;
