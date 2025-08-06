class Enigma {
  constructor(id, dificuldade, enigma, resposta) {
    this._dificuldade = dificuldade;
    this._enigma = enigma;
    this._resposta = resposta;
    this._id = id;
  }

  // Getters
  get dificuldade() {
    return this._dificuldade;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this.id = id;
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
