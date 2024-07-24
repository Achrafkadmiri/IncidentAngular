import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AnnonceEmp, Count, CountPrive, CountType} from "../models/AnnonceEmp.module";
import {AnnonceStage} from "../models/AnnonceStage.module";
import {DemandeStage} from "../models/DemandeStage.module";


@Injectable({
  providedIn: 'root'
})

export class ApiAnnonceEmpService {
  ville =["Casablanca","Rabat","Marrakech","Salé","Tanger","Agadir","Kenitra","Tetouan","Settat","Beni mellal"]
  categorie =["Beauty","Aeronotique","Industrie","Informatique","Technologie","Cuisine","Marketing","Finance","Commerce","Nuclear"]
  host :string ="http://localhost:8080";

  constructor(private http:HttpClient) { }

  getAllAnnoncesEmp(){
    return this.http.get<Array<AnnonceEmp>>(`${this.host}/AnnonceEmpList`);
  }
  getCountPrive(){
    return this.http.get<Array<CountPrive>>(`${this.host}/CountPrive`);
  }
  getCountStage(){
    return this.http.get<Array<CountPrive>>(`${this.host}/CountStage`);
  }
  getCountDemande(){
    return this.http.get<Array<CountPrive>>(`${this.host}/CountDemande`);
  }
  getCountType(){
    return this.http.get<Array<CountType>>(`${this.host}/CountType`);
  }
  getCountCandidat(){
    return this.http.get<Count>(`${this.host}/CountCandidat`);
  }
  getCountRecruteur(){
    return this.http.get<Count>(`${this.host}/CountRecruteur`);
  }
  getAnnoncesEmp(id:number){
    return this.http.get<AnnonceEmp>
    (`${this.host}/showAnnonceEmp?id=${id}`);
  }
  delete(id:number){
    return this.http.get(`${this.host}/deleteAnnonceEmp?id=${id}`);
  }
  saveAnnonceEmp(id:number, annonceEmpBody:AnnonceEmp){
    return this.http.post<AnnonceEmp>(`${this.host}/createAnnonceEmp?id=${id}`, annonceEmpBody);
  }
  AnnoncePriveRecruteur(id:number){
    return this.http.get<Array<AnnonceEmp>>(`${this.host}/AnnoncePriveRecruteur?id=${id}`);
  }
  test(annonceEmpBody:AnnonceEmp){
    console.log(annonceEmpBody)
  }



}
