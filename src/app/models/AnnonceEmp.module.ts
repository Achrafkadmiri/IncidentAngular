import {Recruteur} from "./Recruteur";

export interface AnnonceEmp {
      id:number;
      titre:String;
      datepub:Date;
      nbrapp:number;
      categorie:String;
      ville:String;
      description:String;
  email:String;
  logo:String;
      datelimit:Date;
      recruteur:Recruteur;
      candidat:Array<any>;
}
export interface CountPrive {
  count:number;
  year:number;

}
export interface CountType {
  count:number;
  type:string;

}
export interface Count {
  count:number;

}
