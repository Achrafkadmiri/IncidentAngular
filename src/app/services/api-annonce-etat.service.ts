import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Annonce} from "../models/AnnonceEtat.module";

@Injectable({
  providedIn: 'root'
})
export class ApiAnnonceEtatService {

  host :string ="http://localhost:8080";
  keywords1:Array<string>=['Université Mohammed Premier','Maghreb Arabe Presse','Prévoyance ','Université Cadi Ayyad','exécution des projets','Office de la Formation Professionnelle','Université Hassan II - Casablanca','Centre Hospitalier Ibn Sina','Société Marocaine d\'Ingénierie Touristique','Fondation Mohammed VI de Promotion des Œuvres','Université Sultan Moulay Slimane','Université Abdelmalek Essaâdi','Groupe Institut supérieur de commerce','Société Royale d\'Encouragement du Cheval','Investissement','Office du Développement de la Coopération','Ecolde Nationale d\'agriculture','Université Mohammed V','Office National De L\'Electricité Et De L\'Eau Potable','Caisse de Dépôt et de Gestion','Autorité Nationale de Régulation de l\'\'Electricité','Agence Nationale des Ports','Université Moulay Ismaïl','Atlas Multiservices','Société des Silos Portuaires','Agence Nationale des Equipements Publics','Agence pour l\'aménagement du site de la lagune de Marchica','Chambre de commerce d\'industrie et de services','Agence de Logements et d\'Equipements Militaires','Université Sidi Mohamed Ben Abdellah','Université Hassan 1er','Univesité Chouaïb Doukkali','Université Ibn Tofail']
  keywords2:Array<string>=['Transition','Ministère des Affaires étrangères, de la Coopération africaine et des Marocains résidant à l’Étranger','Jeunesse','Santé','l’Equipement et de l’Eau','l’intérieur','Tourisme','Enseignement','Agriculture','l’Habitat']
  keywords3:Array<string>=['Commune']
  keywords:Array<string>=['Transition','Jeunesse','Fondation Mohammed VI de Promotion des Œuvres','Ministère des Affaires étrangères, de la Coopération africaine et des Marocains résidant à l’Étranger','Université Mohammed Premier','Société Marocaine d\'Ingénierie Touristique','Centre Hospitalier Ibn Sina','Santé','l’Equipement et de l’Eau','l’intérieur','Tourisme','Enseignement','Agriculture','Maghreb Arabe Presse','Prévoyance ','Commune','Université Cadi Ayyad','exécution des projets','Office de la Formation Professionnelle','Université Hassan II - Casablanca','Université Sultan Moulay Slimane','Université Abdelmalek Essaâdi','Groupe Institut supérieur de commerce','Société Royale d\'Encouragement du Cheval','Investissement','Office du Développement de la Coopération','Ecolde Nationale d\'agriculture','Université Mohammed V','l’Habitat','SONARGES','Office National De L\'Electricité Et De L\'Eau Potable','Caisse de Dépôt et de Gestion','Autorité Nationale de Régulation de l\'\'Electricité','Agence Nationale des Ports','Université Moulay Ismaïl','Atlas Multiservices','Société des Silos Portuaires','Univesité Chouaïb Doukkali','Agence Nationale des Equipements Publics','Agence pour l\'aménagement du site de la lagune de Marchica','Université Ibn Tofail','Chambre de commerce d\'industrie et de services','Agence de Logements et d\'Equipements Militaires','Université Sidi Mohamed Ben Abdellah','Université Hassan 1er']

  constructor(private http:HttpClient) { }


  getAnnonceTerritorial(page:number){
    return this.http.get<Array<Annonce>>(`${this.host}/AnnonceTerritoriale?page=${page}`);
  }

  getAnnonceEtat(page:number) {
    return this.http.get<Array<Annonce>>(`${this.host}/AnnonceEtat?page=${page}`);
  }
  getPageAnnonceEtat(size:number,page:number) {
    return this.http.get<Array<Annonce>>(`${this.host}/allAnnonce?page=${page}`);
  }
  getRecentAnnonceEtat() {
    return this.http.get<Array<Annonce>>(`${this.host}/RecentAnnonceEtat`);
  }
  getNewsAnnonceEtat() {
    return this.http.get<Array<Annonce>>(`${this.host}/NewsAnnonceEtat`);
  }
  getTopAnnonceEtat() {
    return this.http.get<Annonce>(`${this.host}/topAnnonceEtat`,);
  }
  getTopAnnoncePublic() {
    return this.http.get<Annonce>(`${this.host}/topAnnoncePublic`,);
  }
  getTopAnnonceT() {
    return this.http.get<Annonce>(`${this.host}/topAnnonceTerritoriale`);
  }
  getAnnonceByID(id:number) {
    return this.http.get<Annonce>(`${this.host}/AnnonceDetail?id=${id}`);
  }
  getAnnoncePublic(page:number) {
    return this.http.get<Array<Annonce>>(`${this.host}/AnnoncePublic?page=${page}`);
  }
  scrapPublic(){
    return this.http.get(`${this.host}/scrapAnnoncePublic`);
  }
  scrapEtat(){
    return this.http.get(`${this.host}/scrapAnnonceEtat`);
  }
  scrapTerritoire(){
    return this.http.get(`${this.host}/scrapAnnonceTerritoriale`);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
