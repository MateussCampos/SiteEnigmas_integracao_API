const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
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

// Função para inserir ou atualizar um usuário pelo googleId
const upsertUser = async (userData) => {
    const db = await conectar();
    const users = db.collection("users");

    const filter = {
        googleId: userData.sub
    };
    const updateDoc = {
        $set: {
            googleId: userData.sub,
            email: userData.email,
            name: userData.name,
            picture: userData.picture,
            updatedAt: new Date()
        },
        $setOnInsert: {
            createdAt: new Date()
        }
    };
    const options = {
        upsert: true,
        returnDocument: "after"
    };

    const result = await users.findOneAndUpdate(filter, updateDoc, options);
    return result;


};

module.exports = {
    conectar,
    bd,
    upsertUser
};