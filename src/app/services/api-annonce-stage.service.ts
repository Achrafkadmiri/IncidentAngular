import { Injectable } from '@angular/core';
import {Annonce} from "../models/AnnonceEtat.module";
import {HttpClient} from "@angular/common/http";
import {AnnonceStage} from "../models/AnnonceStage.module";
import {createCodeBundleOptions} from "@angular-devkit/build-angular/src/tools/esbuild/application-code-bundle";
import {AnnonceEmp, CountPrive} from "../models/AnnonceEmp.module";

@Injectable({
  providedIn: 'root'
})
export class ApiAnnonceStageService {

  niveau=["bac","bac+1","Dut","Bts","Dts","DEUG","licence","Licence Professionel","bac+4","bac+5"]
  ville =["Casablanca","Rabat","Marrakech","Salé","Tanger","Agadir","Kenitra","Tetouan","Settat","Beni mellal"]
  domaine = ["Informatique","Marketing","Commercial/Vente","Finance","Construction","Secrétariat","Tourisme","Logistique","Gestion","Journalisme","Graphisme"]
  type=["à distance","Bénévolat","Stage d'observation","Stage de fin d'études","Stage fonctionnel","Stage pré-embauche"]
  host :string ="http://localhost:8080";
  constructor(private http:HttpClient) { }

  getAllAnnoncesStage(){
    return this.http.get<Array<AnnonceStage>>(`${this.host}/ListStages`);
  }
  getAnnoncesStage(id:number){
    return this.http.get<AnnonceStage>(`${this.host}/AnnonceStageDetail?id=${id}`);
  }
  saveAnnonce(id:number,annonceStageBody:any){
    return this.http.post<AnnonceStage>(`${this.host}/AjouterAnnonce?id=${id}`, annonceStageBody);
  }
  updateAnnonce(annonceStageBody:any){
    return this.http.post<AnnonceStage>(`${this.host}/UpdateAnnonce`, annonceStageBody);
  }
  AnnonceStageRecruteur(id:number){
    return this.http.get<Array<AnnonceStage>>(`${this.host}/AnnonceStageRecruteur?id=${id}`);
  }
  test(annonceStageBody:AnnonceStage){
    console.log(annonceStageBody)
  }
  delete(id:number){
    return this.http.get<Array<AnnonceStage>>(`${this.host}/DeleteAnnonceStage?id=${id}`);
  }


}
