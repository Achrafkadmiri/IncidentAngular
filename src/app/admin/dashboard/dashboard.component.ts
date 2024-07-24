import {Component, OnInit} from '@angular/core';
import {ApiAnnonceEtatService} from "../../services/api-annonce-etat.service";
import Swal from "sweetalert2";
import {Chart} from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  message:String=""
  chartBar:any
  displayloader: boolean=false;
  constructor(private api:ApiAnnonceEtatService) {
  }
  ngOnInit(): void {

  }
  scrapPublic(){
    this.message="scrapping des annonces Public en cours ..."
    this.hideloader()
     this.api.scrapPublic().subscribe({
       next:(data)=>{
         Swal.fire('succés', 'opération est terminé avec succés', 'success')
         this.message="opération est terminé avec succés"
         this.displayloader=false
       },
       error:(err)=>{
         Swal.fire('Erreur', '', 'error')
       }
     })
  }
  scrapEtat(){
    this.message="scrapping des annonces Etatique en cours ..."
    this.hideloader()
    this.api.scrapEtat().subscribe({
      next:(data)=>{
        Swal.fire('succés', 'opération est terminé avec succés', 'success')
        this.message="opération est terminé avec succés"
        this.displayloader=false

      },
      error:(err)=>{
        Swal.fire('Erreur', '', 'error')
      }
    })
  }
  scrapTerritoire(){
    this.message="scrapping des annonces Territoriale en cours ..."
    this.hideloader()
    this.api.scrapTerritoire().subscribe({
      next:(data)=>{

        Swal.fire('succés', 'opération est terminé avec succés', 'success')
        this.message="opération est terminé avec succés"
        this.displayloader=false
      },
      error:(err)=>{
        Swal.fire('Erreur', '', 'error')
      }
    })
  }
   hideloader() {

    // Setting display of spinner
    // element to none

      this.displayloader = true;
  }

}
