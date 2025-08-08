const mongodb = require("mongodb");

// cria uma instância do cliente do mongo
const MongoClient = mongodb.MongoClient;
let cliente;

const conectar = async () => {
  if (!cliente) {
    cliente = await MongoClient.connect("mongodb://127.0.0.1:27017");
  }
  return cliente.db("enigma"); // Corrija aqui para "enigma"
};

const bd = () => {
  return cliente.db("enigma"); // Corrija aqui para "enigma"
};

class EnigmaMongo {
  async close() {
    if (cliente) {
      cliente.close();
    }
    cliente = undefined;
  }

  async inserirEnigmas() {
    const enigmas = [
      {
        dataInsercao: "2025-08-03T17:13:16.417813Z",
        enigma: "Passa diante do sol e não faz sombra. O que é?",
        resposta: "O vento.",
        nivel: "médio",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417836Z",
        enigma: "O que é, o que é? Tem asas mas não voa, bico mas não bica?",
        resposta: "O bule.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417841Z",
        enigma: "O que é, o que é? Quanto mais se seca, mais molhada fica.",
        resposta: "A toalha.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417844Z",
        enigma: "O que é, o que é? Vive no fundo do mar e brilha no escuro?",
        resposta: "O peixe-lanterna.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417847Z",
        enigma: "O que é, o que é? Está entre o céu e a terra?",
        resposta: "A letra E.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417850Z",
        enigma:
          "Um homem está no décimo andar e pula pela janela. Ele sobrevive. Como?",
        resposta: "Ele pulou de paraquedas ou havia uma rede embaixo.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417853Z",
        enigma: "Quanto mais você tira, maior eu fico. O que sou?",
        resposta: "Um buraco.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417857Z",
        enigma: "Tenho olhos mas não vejo. O que sou?",
        resposta: "Um botão.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417862Z",
        enigma: "O que é, o que é? Fica mais leve quanto mais se tira dele?",
        resposta: "O buraco.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417867Z",
        enigma:
          "O que é, o que é? Pode quebrar, mas nunca cair ou tocar o chão?",
        resposta: "Uma promessa.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417873Z",
        enigma: "O que é, o que é? Tem asas mas não voa, bico mas não bica?",
        resposta: "O bule.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417878Z",
        enigma: "O que é, o que é? Quanto mais se seca, mais molhada fica.",
        resposta: "A toalha.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417882Z",
        enigma:
          "O que é, o que é? Quando você me tem, quer me compartilhar. Quando compartilha, não me tem.",
        resposta: "Um segredo.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417887Z",
        enigma: "Quanto mais você tira, maior eu fico. O que sou?",
        resposta: "Um buraco.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417892Z",
        enigma:
          "Se cinco máquinas fazem cinco produtos em cinco minutos, quanto tempo 100 máquinas demoram para fazer 100 produtos?",
        " resposta": "Cinco minutos.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417897Z",
        enigma: "O que é, o que é? Está no começo da rua, mas não no fim.",
        resposta: "A letra R.",
        nivel: "médio",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417900Z",
        enigma:
          "O que é, o que é? Se você tem, quer compartilhar. Se compartilhar, já não tem.",
        " resposta": "Um segredo.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417903Z",
        enigma: "O que é, o que é? Tem asas mas não voa, bico mas não bica?",
        resposta: "O bule.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417906Z",
        enigma:
          "O que é, o que é? Não tem boca, mas fala. Não tem ouvidos, mas escuta.",
        resposta: "O eco.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417908Z",
        enigma: "O que é, o que é? Corre mas não tem pernas.",
        resposta: "O rio.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417911Z",
        enigma: "O que é, o que é? Quanto mais se seca, mais molhada fica.",
        resposta: "A toalha.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417914Z",
        enigma: "Tenho cabeça e cauda, mas não corpo. O que sou?",
        resposta: "Uma moeda.",
        nivel: "médio",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417919Z",
        enigma: "O que é, o que é? Está entre o céu e a terra?",
        resposta: "A letra E.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417923Z",
        enigma: "O que é, o que é? Tem asas mas não voa, bico mas não bica?",
        resposta: "O bule.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417928Z",
        enigma: "O que é, o que é? Quanto mais se tira, maior fica?",
        resposta: "Um buraco.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417933Z",
        enigma: "Tenho teclas mas não toco música. O que sou?",
        resposta: "Um teclado.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417937Z",
        enigma: "Tenho cabeça e cauda, mas não corpo. O que sou?",
        resposta: "Uma moeda.",
        nivel: "médio",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417942Z",
        enigma: "O que é, o que é? Está entre o céu e a terra?",
        resposta: "A letra E.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417948Z",
        enigma: "O que é, o que é? Vive no fundo do mar e brilha no escuro?",
        resposta: "O peixe-lanterna.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417952Z",
        enigma: "O que é, o que é? Pode encher uma casa mas não ocupa espaço.",
        resposta: "A luz.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417957Z",
        enigma:
          "Um homem está no décimo andar e pula pela janela. Ele sobrevive. Como?",
        resposta: "Ele pulou de paraquedas ou havia uma rede embaixo.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417962Z",
        enigma: "O que é, o que é? Tem asas mas não voa, bico mas não bica?",
        resposta: "O bule.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417965Z",
        enigma: "Tenho olhos mas não vejo. O que sou?",
        resposta: "Um botão.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417968Z",
        enigma:
          "Se cinco máquinas fazem cinco produtos em cinco minutos, quanto tempo 100 máquinas demoram para fazer 100 produtos?",
        " resposta": "Cinco minutos.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417972Z",
        enigma: "O que é, o que é? Pode encher uma casa mas não ocupa espaço.",
        resposta: "A luz.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417974Z",
        enigma:
          "O que é, o que é? Quando você me tem, quer me compartilhar. Quando compartilha, não me tem.",
        " resposta": "Um segredo.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417977Z",
        enigma: "O que é, o que é? Quanto mais se seca, mais molhada fica.",
        resposta: "A toalha.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417980Z",
        enigma: "O que é, o que é? Corre mas não tem pernas.",
        resposta: "O rio.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417982Z",
        enigma: "O que é, o que é? Vive no fundo do mar e brilha no escuro?",
        resposta: "O peixe-lanterna.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417985Z",
        enigma:
          "O que é, o que é? Pode quebrar, mas nunca cair ou tocar o chão?",
        resposta: "Uma promessa.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417988Z",
        enigma: "O que é, o que é? Corre mas não tem pernas.",
        resposta: "O rio.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417992Z",
        enigma: "O que é, o que é? Fica mais leve quanto mais se tira dele?",
        resposta: "O buraco.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417997Z",
        enigma: "O que é, o que é? Quanto mais se tira, maior fica?",
        resposta: "Um buraco.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418001Z",
        enigma: "Tenho teclas mas não toco música. O que sou?",
        resposta: "Um teclado.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418006Z",
        enigma:
          "O que é, o que é? Pode quebrar, mas nunca cair ou tocar o chão?",
        resposta: "Uma promessa.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418011Z",
        enigma:
          "O que é, o que é? Se você tem, quer compartilhar. Se compartilhar, já não tem.",
        resposta: "Um segredo.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418017Z",
        enigma: "O que é, o que é? Quanto mais se seca, mais molhada fica.",
        resposta: "A toalha.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418021Z",
        enigma: "O que é, o que é? Está sempre no meio do nada?",
        resposta: "A letra D.",
        nivel: "médio",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418024Z",
        enigma:
          "O que é, o que é? Não tem boca, mas fala. Não tem ouvidos, mas escuta.",
        resposta: "O eco.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418027Z",
        enigma: "O que é, o que é? Está sempre no meio do nada?",
        resposta: "A letra D.",
        nivel: "médio",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417813Z",
        enigma:
          "Um homem entra num bar e pede um copo d'agua. O barman puxa uma arma de debaixo do balcão e aponta para a cabeça do homem, que responde (obrigado) e sai do bar.",
        resposta:
          "O homem havia entrado no bar para se livrar de soluços, procurando um copo de água. O barman, percebendo a situação, saca uma arma e aponta-a para o homem, a fim de curá-lo com um susto.",
        nivel: "médio",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417836Z",
        enigma:
          "Uma mulher salta do parapeito da janela do sexto andar. No entando, não morre nem sofre quaisquer lesões",
        resposta:
          "A mulher estava prestes a cometer suicídio, mas pensou melhor e, em vez de saltar para fora, decidiu pular de volta para o apartamento.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417841Z",
        enigma:
          "João sai em uma viagem com sua bússola. Depois de uma longa caminhada, ele para para comer um sanduiche. Depois disso ele não consegue encontrar o caminho de volta.",
        resposta:
          "João era um cientista que trabalhava perto do Polo Norte. Quando andava, caminhou para o norte, e parou para comer seu sanduiche precisamente no Polo Norte. Quando ele tentou voltar, sua bússola era inútil, já que todas as direções apontavam para o sul.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417844Z",
        enigma:
          "Um homem vai ao médico para saber os resultados de alguns exames. Os resultados não mostram problemas de saúde. No entando, ele comete suicídio logo após a visita.",
        resposta:
          "O paciente sabia que sua esposa estava traindo-o, mas ele só sabia o nome do amante. Sua esposa jurou-lhe que esse amante não existia. No entando, quando o homem saiu do médico, ele viu o nome do amante no relatório. O homem percebeu que sua esposa estava traindo-o com seu médico e não conseguiu lidar com isso.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417847Z",
        enigma: "Roger vê uma luz e fica paralisado, morrendo segundos depois.",
        resposta:
          "Roger era um coelho que escapou da casa onde morava. Ele estava cruzando a estrada à noite quando as luzes de um carro o cegaram. O condutor não o viu e o atropelou.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417850Z",
        enigma:
          "Sebastião estava sentado lendo o jornal quando ouviu um barulho. No momento que percebeu o que havia ocorrido, lamentou por não ter pegado o trem a tempo. Pouco tempo depois, Sebastião cometeu suicídio.",
        resposta:
          "Ele estava falido. Era um colecionador de trens e, para resolver seus problemas econômicos, pretendia vender o seu mais valioso modelo de trem. Ele estava limpando o trem sobre a mesa, mas não deixou-o posicionado de forma segura. Quando se sentou para descançar e começou a ler o jornal, ouviu o trem caindo da mesa. Sebastião não teve tempo de pegá-lo antes de cair no chão.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417853Z",
        enigma:
          "André estava navegando em seu barco quando seu relógio caiu no mar. Ele é um ótimo mergulhador, no entanto, não consegue recuperá-lo.",
        resposta:
          "Ele estava navegando no Mar Morto. Devido a enorme concentração de sal, ele não conseguiu afundar o suficiente para obter o relógio.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417857Z",
        enigma: "Tenho olhos mas não vejo. O que sou?",
        resposta: "Um botão.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417862Z",
        enigma: "O que é, o que é? Fica mais leve quanto mais se tira dele?",
        resposta: "O buraco.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417867Z",
        enigma:
          "O que é, o que é? Pode quebrar, mas nunca cair ou tocar o chão?",
        resposta: "Uma promessa.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417873Z",
        enigma: "O que é, o que é? Tem asas mas não voa, bico mas não bica?",
        resposta: "O bule.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417878Z",
        enigma: "O que é, o que é? Quanto mais se seca, mais molhada fica.",
        resposta: "A toalha.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417882Z",
        enigma:
          "O que é, o que é? Quando você me tem, quer me compartilhar. Quando compartilha, não me tem.",
        resposta: "Um segredo.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417887Z",
        enigma: "Tem dentes, mas não morde.",
        resposta: "Pente.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417892Z",
        enigma: "O que é que quanto mais se espalha, mas aumenta?",
        resposta: "Notícia",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417897Z",
        enigma:
          "Paulo trabalha num banco. Nesse dia, um grande apagão ocorre em toda a cidade. Poucos minutos depois, Paulo morre eletrocutado.",
        resposta:
          "Ele era técnico de informática e decidiu trabalhar no parque naquele dia, sentado em um banco. De repente, começa uma tempestade e ocorre o apagão. Quando Paulo pensa em ir para casa, ele é atingido por um raio.",
        nivel: "médio",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417900Z",
        enigma:
          "Um homem dirigindo um carro provoca um acidente ao colidir com uma bicicleta, ao virar inesperadamente em um cruzamento. Quando os policiais chegam, outro homem é preso. Aquele que estava dirigindo é levado para casa.",
        resposta:
          "O condutor era aluno de autoescola e seu instrutor disse para ele fazer uma curva em um cruzamento, batendo na bicicleta. Os policiais julgaram o instrutor responsável pelo acidente, de modo que o prenderam e levaram o aluno para casa",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417903Z",
        enigma:
          "Alice está prestes a ir ao trabalho, quando encontra uma caixa com seu nome escrito. Dentro da caixa tem um relógio funcionando. Ao olhar para o relógio, ela começa a correr o mais rápido que pode.",
        resposta:
          "Ela havia acabado de se mudar e estava organizando a mudança. Ao abrir a caixa, ela se dá conta de que estava atrasada para o trabalho.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417906Z",
        enigma:
          "Vanessa era amada por todos que a conheciam e não possuia inimigos. Apesar disso, muitas pessoas ficaram felizes com sua morte.",
        resposta:
          "Vanessa era doadora de órgãos e salvou muitas vidas com sua morte.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417908Z",
        enigma:
          "Um pirata enterra seu maior tesouro numa ilha deseta. Após um tempo, ele descobre que um de seus rivais conseguiu uma cópia do mapa que mostra o local do tesouro, mas não se incomoda.",
        resposta:
          "O pirata cavou 3 metros e enterrou 90% do tesouro, cobriu com areia até ficar só 1 metro de profundidade, ali ele colocou os outros 10%, cobrindo tudo com mais areia. O rival não suspeitaria de que o tesouro real estava mais em baixo.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417911Z",
        enigma:
          "Uma mulher é chamada para identificar o suspeito de um assassinato. Cinco homens se alinham do outro lado de um espelho duplo. Apesar de não reconhecer nenhum dos homens, a mulher rapidamente deixa a sala de observação com o rosto pálido, com medo de morrer.",
        resposta:
          "Ao entrar na sala, a mulher não reconheceu nenhum dos 5 homens, mas reconheceu o policial que estava na mesma sala como o assassino.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417914Z",
        enigma:
          "Uma mulher atinge o para-brisa de um veículo que seguia pela rua e cai no chão. O motorista chama a polícia. Ao chegar, o policial cuida da vítima e a leva presa.",
        resposta:
          "A mulher se jogou no veículo com a intenção de receber uma indenização do seguro do motorista. Mas ela não contava que o carro tinha uma câmera que filmou sua ação.",
        nivel: "médio",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417919Z",
        enigma:
          "Uma mulher caminha peça seçva, vê uma pedra e percebe que há uma folha de papel em branco sobre ela. Ela se deita e chora.",
        resposta:
          "Era sua folha de papel. Ela havia deixado para trás enquanto caminhava pela selva. Quando ela viu, percebeu que estava perdida e provavelmente nunca encontraria o caminho para sair de lá.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417923Z",
        enigma: "O que é, o que é? Quanto mais tiro, mais deixo para trás?",
        resposta: "Pegadas.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417928Z",
        enigma: "O que é, o que é? Passa diante do sol, mas não faz sombra.",
        resposta: "Vento.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417933Z",
        enigma: "Tenho teclas mas não toco música. O que sou?",
        resposta: "Um teclado.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417937Z",
        enigma:
          "Quando Marcelo acordou naquela manhã, ele estava surpreso que a porta estava aberta. Justo quando Marcelo estava cruzando a porta ele morre.",
        resposta:
          "Marcelo era um canário que vivia em sua gaiola. Geraldo, um gato, estava esperando sua oportunidade para pegar o Marcelo e comê-lo.",
        nivel: "médio",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417942Z",
        enigma: "O que é, o que é? Está entre o céu e a terra?",
        resposta: "A letra E.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417948Z",
        enigma:
          "Um rapaz vai para a farmácia e rapidamente sai dela com o dinheiro do caixa. O dono da farmácia chama a polícia e, algum tempo depois, um policial recupera o dinheiro e leva o rapaz com ele. Naquela noite, as três pessoas vão à delegacia para relatar um roubo.",
        resposta:
          "O rapaz era filho do dono da farmácia. Seu carro tinha sico roubado e ele tinha um exame importante. Ele estava na farmácia para pedir à mãe algum dinheiro para ele pegar um táxi. Além disso, a mãe chama o marido, que era um policial, e pediu-lhe que levasse seu filho para a consulta. Depois disso tudo, a família relata o roubo do carro.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417952Z",
        enigma: "O que é, o que é? Pode encher uma casa mas não ocupa espaço.",
        resposta: "A luz.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417957Z",
        enigma:
          "Vera nunca pensou que a decisão de viajar de avião iria salvar a sua vida.",
        resposta:
          "Há alguns dias, Vera tinha sido operada. Antes de embarcar no avião, teve que passar pelo detector de metais, que não parou de apitar apesar dela ter removido tudo que carregava. Após um exame de raio-X, perceberam que os médicos tinham deixado um bisturi dentro de seu corpo. Ainda bem que ela descobriu a tempo.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417962Z",
        enigma: "O que é feito para andar e nunca anda?",
        resposta: "Estrada.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417965Z",
        enigma: "Tem asas, mas não voa, tem olhos, mas não vê.",
        resposta: "Um abacaxi.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417968Z",
        enigma:
          "Se cinco máquinas fazem cinco produtos em cinco minutos, quanto tempo 100 máquinas demoram para fazer 100 produtos?",
        resposta: "Cinco minutos.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417972Z",
        enigma: "O que sobe, mas nunca desce?",
        resposta: "A idade.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417974Z",
        enigma:
          "Gabriel invade a casa de Alexandre para matá-lo, mas não o faz. No entando, Gabriel é imediatamente preso e condenado pelo crime.",
        resposta:
          "Gabriel era assassino de aluguel. A pessoa que o contratou tinha planejado matar Alexandre e livrar-se de Gabriel. Para conseguir isso, ele contratou um segundo assassino que matou o Alexandre antes de Gabriel entrar. Quando Gabriel chegou, Alexandre estava morto e a polícia já havia sido chamada.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417977Z",
        enigma: "O que é, o que é? Tem olhos mas não pode ver.",
        resposta: "Agulha.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417980Z",
        enigma: "O que é, o que é? Corre mas não tem pernas.",
        resposta: "O rio.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417982Z",
        enigma: "Um casal de dançarinos morre durante uma competição de dança.",
        resposta:
          "Durante uma competição de tango, outro casal muito competitivo envenenou a rosa que o casal passou um ao outro durante sua performance.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417985Z",
        enigma:
          "Um homem pede demissão e comemora fazendo uma festa noite adentro. No dia seguinte ele se veste e pula da sacada do seu apartamento.",
        resposta:
          "O homem ganhou na loteria. Ele pede demissão e comemora com os amigos. No dia seguinte ele se veste para resgatar o premio mas percebe que o bilhete foi destruído ao lavar seu terno alguns dias antes.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417988Z",
        enigma: "Tem pescoço, mas não tem cabeça",
        resposta: "Garrafa.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417992Z",
        enigma: "O que é, o que é? Não pode ser visto, mas pode ser sentido",
        resposta: "O ar.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.417997Z",
        enigma: "Sou cheio de buracos, mas ainda consigo segurar água.",
        resposta: "Esponja",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418001Z",
        enigma: "Sou redondo, moro no céu e apareço de dia e de noite.",
        resposta: "O sol.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418006Z",
        enigma:
          "Um colecionador de moedas encontra um anúncio sobre uma coleção por um preço muito baixo. Após ler cuidadosamente, ele decide comprar. Apesar do anúncio ser verdadeiro e o valor ser muito mais alto que o gasto, ele fica muito zangado.",
        resposta:
          "A esposa do colecionador descobriu que ele tinha um caso com outra mulher. Para se vingar, ela colocou a venda a coleção de moedas do marido por um preço baixo para conseguir vender rápido.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418011Z",
        enigma: "Um homem morre no natal após recebe rum SMS",
        resposta:
          "O homem era um terrorista que estava planejando um ataque. Ele armou a bomba para explodir ao receber a mensagem de texto. Quando estava em casa fazendo os retoques finais, recebeu uma mensagem de (Feliz Natal) da operadora de celular e isso explodiu a bomba.",
        nivel: "difícil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418017Z",
        enigma:
          "Sou leve como uma pena, mas nem o homem mais forte consegue me segurar por muito tempo.",
        resposta: "Respiração.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418021Z",
        enigma:
          "Uma mulher corre pelo corredor mas para de repente, e com lágrimas nos olhos, dá meia volta.",
        resposta:
          "A mulher era uma advogada que finalmente conseguiu que seu cliente que estava sentenciado a pena de morte, fosse perdoado. Mas ela não conseguiu avisar a tempo.",
        nivel: "médio",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418024Z",
        enigma:
          "O que é, o que é? Não tem boca, mas fala. Não tem ouvidos, mas escuta.",
        resposta: "O eco.",
        nivel: "fácil",
      },
      {
        dataInsercao: "2025-08-03T17:13:16.418027Z",
        enigma:
          "Um homem ataca o carro de luxo de Victor. Mesmo vendo seu carro ser destruído, ele não fez qualquer esforço para parar o homem.",
        resposta:
          "Victor e Mateus fizeram uma aposta. Fpo acprdadp que o vencedor poderia destruir o carro do perdedor. Victor perdeu a aposta.",
        nivel: "médio",
      },
    ];

    await conectar();
    const colecao = bd().collection("enigmas");
    await colecao.insertMany(enigmas);
  }

  async obterTodosEnigmas() {
    const db = await conectar();
    const enigmas = await db.collection("enigmas").find().toArray();
    return enigmas;
  }

  async obterEnigmaFacil() {
    const db = await conectar();
    const enigmasFaceis = await db
      .collection("enigmas")
      .find({ nivel: "fácil" })
      .toArray();
    return enigmasFaceis;
  }

  async obterEnigmaFacilPorIndice(indice) {
    const db = await conectar();

    const enigmasFaceis = await db
      .collection("enigmas")
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
      .collection("enigmas")
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
      .collection("enigmas")
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

module.exports = new EnigmaMongo(); // Exporta a instância da classe, não a classe nem o conectar
