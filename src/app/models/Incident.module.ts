export interface Incident {
  id :number;
  job:String;
  date:Date;
  dateTraited:Date
  directory:String;
  file:String;
  errorCause:String;

}
export interface CountIncident {
  count:number;
  year:number;
  month:number;

}
