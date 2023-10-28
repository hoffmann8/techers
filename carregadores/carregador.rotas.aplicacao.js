const inicializarRotasDeRelogios = require('./carregador.rotas.relogios')
const inicializarRotasDeUsuarios = require('./carregador.rotas.usuarios')

class carregadorRotasAplicacao {
 
    static inicializarRotasDaAplicacao(servidor) {
        inicializarRotasDeRelogios.inicializarRotasDeRelogios(servidor)
        inicializarRotasDeUsuarios.inicializarRotasDeUsuarios(servidor)
    }

}

module.exports = carregadorRotasAplicacao