import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Annonce} from "../models/AnnonceEtat.module";
import {Candidat} from "../models/Candidat.module";
import {Recruteur} from "../models/Recruteur";
import {Admin} from "../models/Admin.module";

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {
  host :string ="http://localhost:8080";

  constructor(private http:HttpClient) { }

  RegisterCandidat(candidat:Candidat ) {
    return this.http.post<Candidat>(`${this.host}/RegisterCandidat`,candidat);
  }
  LoginCandidat(candidat:Candidat ) {
    return this.http.post<Candidat>(`${this.host}/loginCandidat`,candidat);
  }

  LoginAdmin(admin:Admin ) {
    return this.http.post<Admin>(`${this.host}/loginAdmin`,admin);
  }
  RegisterRecruteur(recruteur:Recruteur ) {
    return this.http.post<Recruteur>(`${this.host}/RegisterRecruteur`,recruteur);
  }
  LoginRecruteur(recruteur:Recruteur ) {
    return this.http.post<Recruteur>(`${this.host}/loginRecruteur`,recruteur);
  }



}
