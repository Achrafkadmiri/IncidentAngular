
export interface Annonce {
  id :number;
  titre:String;
  grade:String;
  datePublication:String;
  dateConcours:String;
  delaiDepot:String;
  nombrePostes:String;
  email:String;
  telephone:String;
  avis:String;

  lienDetail:String;
  typeDeRecrutement:String;
  pdftitre:String;
  type:String;
  candidat:Array<any>;

}
