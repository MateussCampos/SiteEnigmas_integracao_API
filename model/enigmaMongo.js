const mongodb = require('mongodb');

// cria uma instância do cliente do mongo
const MongoClient = mongodb.MongoClient;
let cliente;

const conectar = async () => {
  if (!cliente) {
    cliente = await MongoClient.connect('mongodb://127.0.0.1:27017');
  }
  return cliente.db('enigma');
};

class NotaMongo {
  async close() {
    if (cliente) {
      cliente.close();
    }
    cliente = undefined;
  }

  async obterTodosEnigmas() {
    const db = await conectar();
    const enigmas = await db.collection('enigmas').find().toArray();
    return enigmas;
  }

  async obterEnigmaFacil() {
    const db = await conectar();
    const enigmasFaceis = await db.collection('enigmas').find({ nivel: "fácil" }).toArray();
    return enigmasFaceis;

  }

  async obterEnigmaFacilPorIndice(indice) {
    const db = await conectar();

    const enigmasFaceis = await db
      .collection('enigmas')
      .find({ nivel: "fácil" })
      .toArray();

  
    // O índice vem a partir de 1, mas o array é baseado em 0
    const posicao = indice - 1;

    

    if (posicao >= 0 && posicao < enigmasFaceis.length) {
      return enigmasFaceis[posicao];
    } else {
      return { mensagem: "Próximo Nível" };
    }
  }

  async obterEnigmaMedioPorIndice(indice) {
    const db = await conectar();

    const enigmaMedio = await db
      .collection('enigmas')
      .find({ nivel: "médio" })
      .toArray();

    const posicao = indice - 1;  
    if (posicao >= 0 && posicao < enigmaMedio.length) {
      return enigmaMedio[posicao];
    } else {
      return { mensagem: "Próximo Nível" };
    }
  }

  async obterEnigmaDificilPorIndice(indice) {
    const db = await conectar();

    const enigmasDificeis = await db
      .collection('enigmas')
      .find({ nivel: "difícil" })
      .toArray();

  
    const posicao = indice - 1;
    if (posicao >= 0 && posicao < enigmasDificeis.length) {
      return enigmasDificeis[posicao];
    } else {
      return { mensagem: "Próximo Nível" };
    }
  }

}

module.exports = new NotaMongo(); // Exporta a instância da classe, não a classe nem o conectar
