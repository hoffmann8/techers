const jogosController = require('../controllers/relogios.controller')
const {SERVER_BASE_URL} = require('../shared/server.constants')

class carregadorRotasrelogios {
 
    static inicializarRotasDerelogios(servidor) {
        const ENTITY_NAME = 'relogios/'

        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'consultar', relogiosController.consultar)
        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'consultar-by-id/:id', relogiosController.consultarPeloId)
        servidor.post(SERVER_BASE_URL + ENTITY_NAME + 'cadastrar', relogiosController.cadastrar)
        servidor.put(SERVER_BASE_URL + ENTITY_NAME + 'atualizar', relogiosController.atualizar)
        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'pagina-inicial', relogiosController.telaInicial)
        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'pagina-cadastro', relogiosController.telaFormulario)
        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'pagina-edicao/:id', relogiosController.telaFormulario)
    }

}

module.exports = carregadorRotasJogos