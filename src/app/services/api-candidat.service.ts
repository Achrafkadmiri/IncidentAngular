import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Candidat} from "../models/Candidat.module";

@Injectable({
  providedIn: 'root'
})
export class ApiCandidatService {

  host :string ="http://localhost:8080";
  constructor(private http:HttpClient) { }


  getAllCandidats(){
    return this.http.get<Array<Candidat>>(`${this.host}/AllCandidats`);
  }
  delete(id:number){
    return this.http.get(`${this.host}/DeleteCandidat?id=${id}`);
  }

}
