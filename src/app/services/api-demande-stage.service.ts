
import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {DemandeStage} from "../models/DemandeStage.module";
import {Candidat} from "../models/Candidat.module";


@Injectable({
  providedIn: 'root'
})
export class ApiDemandeStageService {
host :string ="http://localhost:8080";


  constructor(private http:HttpClient) { }

  getDemandeStageServicesList(){
    return this.http.get<Array<DemandeStage>>(`${this.host}/demandeStageServicesList`);
  }


  getDemandeStage(id:number){
    return this.http.get<DemandeStage>(`${this.host}/showdemandeStage?id=${id}`);
  }
  saveDemandeStage(id:number,demandeStage:DemandeStage){
    return this.http.post<DemandeStage>(`${this.host}/saveDemandeStage?id=${id}`,demandeStage);
  }
  getDemandesStageByCandidat(id:number){
    return this.http.get<Array<DemandeStage>>(`${this.host}/getDemandesStage?id=${id}`);
  }
  deleteDemande(id:number){
    return this.http.get(`${this.host}/deleteDemandeStage?id=${id}`);
  }

  candidatByDemande(id:number){
    return this.http.get<Candidat>(`${this.host}/candidatByDemande?id=${id}`);
  }
}



