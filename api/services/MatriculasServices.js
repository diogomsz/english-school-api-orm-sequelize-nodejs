const Services = require('./Services');

class MatriculasServices extends Services {
    constructor() {
        super('Matriculas');
    }

    async pegaUmRegistro(where) {
        return await database[this.nomeDoModelo].findOne({ where: { ...where } });
    }

    async pegaTodosOsRegistrosEConte(object = {}) {
        const { where, attributes, group, limit, order, having } = object;

        where = where || {};
        attributes = attributes || {};
        group = group || [];
        limit = limit || 10;
        order = order || [];
        having = having || {};

        return await database[this.nomeDoModelo].findAndCountAll({ where: { ...where }, attributes, group, having, limit, order });
    }

    // métodos específicos do controlador de Matriculas
}

module.exports = MatriculasServices;
