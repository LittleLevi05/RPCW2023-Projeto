const Inscrito = require("../models/inscrito");
module.exports.addInscrito = async function(inscrito) {
    try {
        return await Inscrito.create(inscrito)
    } catch (erro) {
        return erro
    }
}


module.exports.getInscrito = function(id, userID) {
    return Inscrito.findOne({ userID: userID, codEvento: id})
        .then(inscrito => {
            return inscrito
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getInscritosByEvento = function(id) {
    return Inscrito.find({ codEvento: id})
    .then(inscritos => {
        return inscritos
    })
    .catch(erro => {
        return erro
    })
}

module.exports.getInscritoById = function(id) {
    return Inscrito.findOne({ _id: id})
        .then(inscrito => {
            return inscrito
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getInscritos = function() {
    return Inscrito.find({})
        .then(inscritos => {
            return inscritos
        })
        .catch(erro => {
            return erro
        })
}

module.exports.deleteInscritoByEventSocio = function(evento, socio) {
    return Inscrito.deleteOne({ codEvento: evento, userID: socio})
        .then(inscrito => {
            return inscrito
        })
        .catch(erro => {
            return erro
        })
}