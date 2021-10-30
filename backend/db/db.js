import mongoose from "mongoose"; //Importar librera que administra mongo en nodejs
//from de donde viene la libreria , que esta en la carpeta node_modules
//js viejo
//const mongoose =requiere("mongoose")

const dbConnection = async () => {

try {
    //esta funcion connect va a utilizar la libreria mongoose y process nos ayuda a sacar lo que tiene el archibo .env y saca la variable de entorno DB_CONNECTION
 await mongoose.connect(process.env.DB_CONNECTION,{
useNewUrlParser:true,
useUnifiedTopology:true,

});

console.log("Connection with MongoDB : ON")
//En env estan las variables de entorno


//error en la conexion
//mostrar el error que capturo el try
} catch (e) {

    console.log("Error conecting MongoDB: \n" + e);
}

};

export default { dbConnection };


//exportamos por defecto el archivo como modulo exportamos la funcion 