import mongoose = require("mongoose");
import {IInterventor, getInterventor} from "./Interventor"
import {connectMongoDB} from "./helpers"

interface IProducts extends mongoose.Document { 
    name: string;
    edad: number;
    ocupacion: string;
    direccion: string;
    telefono: number;
    interventor: IInterventor;
}

const BeneficiarioSchema = new mongoose.Schema({
    name: { type: String, required: true},
    edad: {type: Number, required: true},
    ocupacion: {type: String, required: true},
    direccion: {type: String, required: true},
    telefono: {type: Number, required: true},
    interventor: { type: mongoose.Schema.Types.ObjectId, ref: "Interventor" }
});

export const Beneficiario = mongoose.model<IProducts>("Interventor", BeneficiarioSchema);

export const CreateBeneficiario = async function(nameInterventor: string, name: string, edad: number, ocupacion: string, direccion: string, telefono: number){
    //Conectar con la base de datos
    await connectMongoDB;
    //Obtener el proveedor en funcion del nombre
    const inter:any = await getInterventor(nameInterventor);

    //persistencia de nuestro producto
    const b = new Beneficiario();
    b.name = name;
    b.edad = edad;
    b.ocupacion = ocupacion;
    b.direccion =  direccion;
    b.telefono = telefono;
    b.interventor = inter;

    b.save((err:any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(b);
        }
    });
}

