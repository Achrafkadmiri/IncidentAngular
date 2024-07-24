import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CountIncident, Incident} from "../models/Incident.module";
import {CountPrive} from "../models/AnnonceEmp.module";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  traiterIncident(id:number){
    return this.http.get<Incident>(`http://localhost:8080/traited?id=${id}`);
  }
  getAllIncident(){
    return this.http.get<Array<Incident>>('http://localhost:8080/findAllIncident');
  }
  getAllTraitedIncident(){
    return this.http.get<Array<Incident>>('http://localhost:8080/findAllIncidentTraited');
  }
  getAllNonTraitedIncident(){
    return this.http.get<Array<Incident>>('http://localhost:8080/findAllIncidentNonTraited');
  }
  getCount(status:boolean,year:number){
    return this.http.get<Array<CountIncident>>(`http://localhost:8080/getCount?status=${status}&year=${year}`);
  }
  getCountTraited(status:boolean,year:number){
    return this.http.get<Array<CountIncident>>(`http://localhost:8080/getCountTraited?status=${status}&year=${year}`);
  }
  getCountByError(year:number,error:String){
    return this.http.get<Array<CountIncident>>(`http://localhost:8080/getCountError?year=${year}&error=${error}`);
  }
}
