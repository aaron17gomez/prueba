import mongoose = require("mongoose");
import {connectMongoDB} from "./helpers"

export interface IInterventor extends mongoose.Document { 
    name: string;
    edad:number;
    direccion: string;
    telefono: number;
}

const InterventorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    edad: { type: Number, required: true },
    direccion: { type: String, required: true },
    telefono: {type: Number, required: true}
});

export const Interventor = mongoose.model<IInterventor>("Interventor", InterventorSchema);

export const CreateInterventor = async function(name: string, edad: number, direccion: string, telefono: number){
    await connectMongoDB;

    const newOne = new Interventor();
    newOne.name = name;
    newOne.edad = edad;
    newOne.direccion = direccion;
    newOne.telefono = telefono;

    newOne.save( (err:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(newOne);
        }
    } );
}

export function getInterventor(_name: string):Promise<any>{
    return new Promise<any>( resolve => {
        Interventor.findOne({ name: _name}, (err:any,data:any) => {
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        } );
    });
}
