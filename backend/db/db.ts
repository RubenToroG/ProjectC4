import { connect } from 'mongoose';
// const { connect } = require('mongoose')

const conectarDB = async () => {
    return await connect(
        'mongodb+srv://admin:admin@projectc4.hrvdb.mongodb.net/ProyectoC4?retryWrites=true&w=majority'
        )
        .then(() => {
            console.log('Conexion exitosa');
        })
        .catch((e) => {
            console.error('Error conectando a la bd', e)
        })

};

export default conectarDB;