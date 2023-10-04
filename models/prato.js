import mongoose from "mongoose";

// obj de config com propriedades 
const pratoSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    preco: { type: Number },
}, { versionKey: false });

const prato = mongoose.model("pratos", pratoSchema);

export default prato