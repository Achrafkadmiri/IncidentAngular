import {Candidat} from "./Candidat.module";


export interface DemandeStage {
  id: number;
  photo: String;
  titre: String;
  cv: String;
  dateDebut: Date;
  duree: number;
  telephone: String;
  niveau: String;
  ecole: String;
  typeStage: String;
  domaine: String;
  candidats: Candidat

}
