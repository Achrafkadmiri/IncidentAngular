import {Recruteur} from "./Recruteur";

export interface AnnonceStage {
  id :number;
  titre:String;
  nbrPoste:number;
  dateDebut:Date;
  duree:number;
  ville:String;
  description:String;
  type:String;
  nomEntreprise: String;
  domaine:string;
  logo:string;
  candidat:any;
  recruteur:Recruteur;

}
