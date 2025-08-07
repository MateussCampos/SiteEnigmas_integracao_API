/*const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Array de enigmas (você pode importar de um arquivo externo se preferir)
const enigmas = [
  {
    "dataInsercao": "2025-08-03T17:13:16.417813Z",
    "enigma": "Passa diante do sol e não faz sombra. O que é?",
    "resposta": "O vento.",
    "nivel": "médio"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417836Z",
    "enigma": "O que é, o que é? Tem asas mas não voa, bico mas não bica?",
    "resposta": "O bule.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417841Z",
    "enigma": "O que é, o que é? Quanto mais se seca, mais molhada fica.",
    "resposta": "A toalha.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417844Z",
    "enigma": "O que é, o que é? Vive no fundo do mar e brilha no escuro?",
    "resposta": "O peixe-lanterna.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417847Z",
    "enigma": "O que é, o que é? Está entre o céu e a terra?",
    "resposta": "A letra E.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417850Z",
    "enigma": "Um homem está no décimo andar e pula pela janela. Ele sobrevive. Como?",
    "resposta": "Ele pulou de paraquedas ou havia uma rede embaixo.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417853Z",
    "enigma": "Quanto mais você tira, maior eu fico. O que sou?",
    "resposta": "Um buraco.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417857Z",
    "enigma": "Tenho olhos mas não vejo. O que sou?",
    "resposta": "Um botão.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417862Z",
    "enigma": "O que é, o que é? Fica mais leve quanto mais se tira dele?",
    "resposta": "O buraco.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417867Z",
    "enigma": "O que é, o que é? Pode quebrar, mas nunca cair ou tocar o chão?",
    "resposta": "Uma promessa.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417873Z",
    "enigma": "O que é, o que é? Tem asas mas não voa, bico mas não bica?",
    "resposta": "O bule.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417878Z",
    "enigma": "O que é, o que é? Quanto mais se seca, mais molhada fica.",
    "resposta": "A toalha.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417882Z",
    "enigma": "O que é, o que é? Quando você me tem, quer me compartilhar. Quando compartilha, não me tem.",
    "resposta": "Um segredo.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417887Z",
    "enigma": "Quanto mais você tira, maior eu fico. O que sou?",
    "resposta": "Um buraco.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417892Z",
    "enigma": "Se cinco máquinas fazem cinco produtos em cinco minutos, quanto tempo 100 máquinas demoram para fazer 100 produtos?",
    "resposta": "Cinco minutos.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417897Z",
    "enigma": "O que é, o que é? Está no começo da rua, mas não no fim.",
    "resposta": "A letra R.",
    "nivel": "médio"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417900Z",
    "enigma": "O que é, o que é? Se você tem, quer compartilhar. Se compartilhar, já não tem.",
    "resposta": "Um segredo.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417903Z",
    "enigma": "O que é, o que é? Tem asas mas não voa, bico mas não bica?",
    "resposta": "O bule.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417906Z",
    "enigma": "O que é, o que é? Não tem boca, mas fala. Não tem ouvidos, mas escuta.",
    "resposta": "O eco.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417908Z",
    "enigma": "O que é, o que é? Corre mas não tem pernas.",
    "resposta": "O rio.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417911Z",
    "enigma": "O que é, o que é? Quanto mais se seca, mais molhada fica.",
    "resposta": "A toalha.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417914Z",
    "enigma": "Tenho cabeça e cauda, mas não corpo. O que sou?",
    "resposta": "Uma moeda.",
    "nivel": "médio"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417919Z",
    "enigma": "O que é, o que é? Está entre o céu e a terra?",
    "resposta": "A letra E.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417923Z",
    "enigma": "O que é, o que é? Tem asas mas não voa, bico mas não bica?",
    "resposta": "O bule.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417928Z",
    "enigma": "O que é, o que é? Quanto mais se tira, maior fica?",
    "resposta": "Um buraco.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417933Z",
    "enigma": "Tenho teclas mas não toco música. O que sou?",
    "resposta": "Um teclado.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417937Z",
    "enigma": "Tenho cabeça e cauda, mas não corpo. O que sou?",
    "resposta": "Uma moeda.",
    "nivel": "médio"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417942Z",
    "enigma": "O que é, o que é? Está entre o céu e a terra?",
    "resposta": "A letra E.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417948Z",
    "enigma": "O que é, o que é? Vive no fundo do mar e brilha no escuro?",
    "resposta": "O peixe-lanterna.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417952Z",
    "enigma": "O que é, o que é? Pode encher uma casa mas não ocupa espaço.",
    "resposta": "A luz.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417957Z",
    "enigma": "Um homem está no décimo andar e pula pela janela. Ele sobrevive. Como?",
    "resposta": "Ele pulou de paraquedas ou havia uma rede embaixo.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417962Z",
    "enigma": "O que é, o que é? Tem asas mas não voa, bico mas não bica?",
    "resposta": "O bule.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417965Z",
    "enigma": "Tenho olhos mas não vejo. O que sou?",
    "resposta": "Um botão.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417968Z",
    "enigma": "Se cinco máquinas fazem cinco produtos em cinco minutos, quanto tempo 100 máquinas demoram para fazer 100 produtos?",
    "resposta": "Cinco minutos.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417972Z",
    "enigma": "O que é, o que é? Pode encher uma casa mas não ocupa espaço.",
    "resposta": "A luz.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417974Z",
    "enigma": "O que é, o que é? Quando você me tem, quer me compartilhar. Quando compartilha, não me tem.",
    "resposta": "Um segredo.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417977Z",
    "enigma": "O que é, o que é? Quanto mais se seca, mais molhada fica.",
    "resposta": "A toalha.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417980Z",
    "enigma": "O que é, o que é? Corre mas não tem pernas.",
    "resposta": "O rio.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417982Z",
    "enigma": "O que é, o que é? Vive no fundo do mar e brilha no escuro?",
    "resposta": "O peixe-lanterna.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417985Z",
    "enigma": "O que é, o que é? Pode quebrar, mas nunca cair ou tocar o chão?",
    "resposta": "Uma promessa.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417988Z",
    "enigma": "O que é, o que é? Corre mas não tem pernas.",
    "resposta": "O rio.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417992Z",
    "enigma": "O que é, o que é? Fica mais leve quanto mais se tira dele?",
    "resposta": "O buraco.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.417997Z",
    "enigma": "O que é, o que é? Quanto mais se tira, maior fica?",
    "resposta": "Um buraco.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.418001Z",
    "enigma": "Tenho teclas mas não toco música. O que sou?",
    "resposta": "Um teclado.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.418006Z",
    "enigma": "O que é, o que é? Pode quebrar, mas nunca cair ou tocar o chão?",
    "resposta": "Uma promessa.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.418011Z",
    "enigma": "O que é, o que é? Se você tem, quer compartilhar. Se compartilhar, já não tem.",
    "resposta": "Um segredo.",
    "nivel": "difícil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.418017Z",
    "enigma": "O que é, o que é? Quanto mais se seca, mais molhada fica.",
    "resposta": "A toalha.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.418021Z",
    "enigma": "O que é, o que é? Está sempre no meio do nada?",
    "resposta": "A letra D.",
    "nivel": "médio"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.418024Z",
    "enigma": "O que é, o que é? Não tem boca, mas fala. Não tem ouvidos, mas escuta.",
    "resposta": "O eco.",
    "nivel": "fácil"
  },
  {
    "dataInsercao": "2025-08-03T17:13:16.418027Z",
    "enigma": "O que é, o que é? Está sempre no meio do nada?",
    "resposta": "A letra D.",
    "nivel": "médio"
  }
];

// Função principal
async function popularBanco() {
  const url = 'mongodb://127.0.0.1:27017';
  const nomeBanco = 'enigma';
  const nomeColecao = 'enigmas';

  try {
    const cliente = await MongoClient.connect(url, {
      useUnifiedTopology: true
    });

    console.log("✅ Conectado ao MongoDB!");

    const db = cliente.db(nomeBanco);
    const colecao = db.collection(nomeColecao);

    // Remove todos os registros antigos (opcional)
    await colecao.deleteMany({});

    // Insere os novos enigmas
    const resultado = await colecao.insertMany(enigmas);
    console.log(`✅ ${resultado.insertedCount} enigmas inseridos com sucesso!`);

    await cliente.close();
    console.log("✅ Conexão encerrada.");
  } catch (erro) {
    console.error("❌ Erro ao popular o banco:", erro);
  }
}

popularBanco();
*/