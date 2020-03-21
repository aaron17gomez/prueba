import mongoose = require("mongoose");
import { resolve } from "dns";

const uri: string = "mongodb+srv://ADMI:31579436@cluster0-mibza.azure.mongodb.net/Lideres?retryWrites=true&w=majority"; // aqui usen su base de datos

export const connectMongoDB  = new Promise<void>(resolve => {
    mongoose.connect(uri,{ useNewUrlParser:true, useUnifiedTopology: true }, (err: any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log("Conexion exitosa");
        }
        resolve();
    });
});
