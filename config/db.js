import mongoose, { mongo } from "mongoose";

async function conectarBanco() {
    mongoose.connect("mongodb+srv://cluster-yumfood:adm321@cluster0.z5ilcva.mongodb.net/cardapio?retryWrites=true&w=majority")

    return mongoose.connection;
}

export default conectarBanco