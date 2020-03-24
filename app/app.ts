import {CreateInterventor} from "./Interventor";
import { CreateBeneficiario } from "./Beneficiario";


/*
Para que todo esto funcione necesitan instalar las siguientes dependencias manualmente:
typescript: npm install typescript --save-dev      (save-dev es para crear las depencias de desarrollo que no van a estar en produccion)
ts-node: npm install ts-node-dev --save-dev  
mongoose: npm install mongoose
@types/mongoose: npm install @types/mongoose
*/ 

//CreateInterventor("Jorge", 22, "col. La Rosa", 31599436);
CreateBeneficiario("Jorge", "Larisa Alfaro", 18, "Ama de casa", "col. la pradera", 33986654);
