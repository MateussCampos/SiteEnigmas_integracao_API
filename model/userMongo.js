const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId; 
let cliente;

const conectar = async () => {
    if (!cliente) {
        cliente = await MongoClient.connect("mongodb://127.0.0.1:27017");
    }
    return cliente.db("enigma");
};

const bd = () => {
    return cliente.db("enigma");
};

const upsertUser = async (userData) => {
    const db = await conectar();
    const users = db.collection("users");

    // Extrai o nickname parte do email antes do @
    const nickname = userData.email ? userData.email.split('@')[0] : '';

    const filter = {
        googleId: userData.sub
    };
    const updateDoc = {
        $set: {
            googleId: userData.sub,
            email: userData.email,
            name: userData.name,
            picture: userData.picture,
            email_verified: userData.email_verified,
            updatedAt: new Date()
        },
        $setOnInsert: {
            createdAt: new Date(),
            nickname: nickname 
        }
    };
    const options = {
        upsert: true,
        returnDocument: "after"
    };

    // A função findOneAndUpdate é uma função do banco de dados mongodb, serve para procurar um dado no banco de dados por meio da variavel filter, se é
    // encontrado esse dado os dadso do banco são atualizado, caso não exista a variavel optinos define que pode criar um novo usuário com os dados buscados

    const result = await users.findOneAndUpdate(filter, updateDoc, options);
    return result;
};

const deletarUsuarioPeloId = async (id) => {
    const db = await conectar();
    const users = db.collection("users");

    // Converte para ObjectId (se possível)
    let objectId;
        objectId = new ObjectId(id);


    const result = await users.deleteOne({ _id: objectId });
    return result.deletedCount > 0;
};

async function atualizarNicknamePeloId(id, novoNickname) {
  const db = await conectar();
  const result = await db.collection('users').updateOne(
    { _id: new ObjectId(id) },
    { $set: { nickname: novoNickname } }
  );

  return result.modifiedCount > 0;
}

module.exports = {
    conectar,
    bd,
    upsertUser,
    deletarUsuarioPeloId,
    atualizarNicknamePeloId
};