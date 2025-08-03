class Enigma {
  constructor(dificuldade, enigma, resposta) {
    this._dificuldade = dificuldade;
    this._enigma = enigma;
    this._resposta = resposta;
  }

  // Getters
  get dificuldade() {
    return this._dificuldade;
  }

  get enigma() {
    return this._enigma;
  }

  get resposta() {
    return this._resposta;
  }

  // Setters
  set dificuldade(valor) {
    this._dificuldade = valor;
  }

  set enigma(valor) {
    this._enigma = valor;
  }

  set resposta(valor) {
    this._resposta = valor;
  }
}

module.exports = Enigma;
