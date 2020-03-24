import mongoose = require("mongoose");
import { resolve } from "dns";

const uri: string = "mongodb+srv://ADMI:henriqueta@cluster0-mibza.azure.mongodb.net/Interventor?retryWrites=true&w=majority"; // aqui usen su base de datos

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
