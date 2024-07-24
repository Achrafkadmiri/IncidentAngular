import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recruteur} from "../models/Recruteur";
@Injectable({
  providedIn: 'root'
})
export class ApiRecruteurService {

  host :string ="http://localhost:8080";
  constructor(private http:HttpClient) { }


  getAllRecruteurs(){
    return this.http.get<Array<Recruteur>>(`${this.host}/AllRecruteur`);
  }
  getRecruteur(id:number){
    return this.http.get<Recruteur>(`${this.host}/GetRecruteur?id=${id}`);
  }
  delete(id:number){
    return this.http.get(`${this.host}/DeleteRecruteur?id=${id}`);
  }

}
