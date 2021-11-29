import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: { 
        type: String,
        required: true,
    },
    identification: { 
        type: String, 
        required: true,
        unique: true
    },
    nombre: { 
        type: String, 
        required:true 
    },
    apellidos: { 
        type: String, 
        required:true
    },

});

const UserModel = model('User', userSchema);

export default UserModel;