import {Component, OnInit} from '@angular/core';
import {ApiAnnonceStageService} from "../../services/api-annonce-stage.service";
import {ActivatedRoute} from "@angular/router";
import {UploadFileService} from "../../services/upload-file.service";
import {AnnonceEmp} from "../../models/AnnonceEmp.module";
import {ApiAnnonceEmpService} from "../../services/api-annonce-emp.service";
import {Subject} from "rxjs";
import Swal from "sweetalert2";
import {ApiRecruteurService} from "../../services/api-recruteur-service.service";
import {Recruteur} from "../../models/Recruteur";

@Component({
  selector: 'app-annonce-privee-recruteur',
  templateUrl: './annonce-privee-recruteur.component.html',
  styleUrls: ['./annonce-privee-recruteur.component.css']
})
export class AnnoncePriveeRecruteurComponent implements OnInit{
  annonces!:AnnonceEmp[]
  recruteur!:Recruteur
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  id!:number
  constructor(private api:ApiAnnonceEmpService,private api1:ApiRecruteurService  , private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.dtOptions={
      pagingType:'full_numbers'
    }
    this.route.params.subscribe(params => {
      //console.log(params);
      this.id=+params['id'];
      this.getAnnonce()
      this.getRecruteur()
      this.dtTrigger.next(null);
    });

  }
  getAnnonce(){
    this.api.AnnoncePriveRecruteur(this.id).subscribe({
      next:(data)=>{
        this.annonces=data;
        this.dtTrigger.next(null);
      }
    })
  }
  getRecruteur(){
    this.api1.getRecruteur(this.id).subscribe({
      next:(data)=>{
        this.recruteur=data;
        this.dtTrigger.next(null);
      }
    })
  }
  handleDelete(id:number){
    Swal.fire({
      title: 'vous etes sur?',
      text: "vous voulez le supprimer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'Non, ignorer!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete(id).subscribe({
          next:(data)=>{
            Swal.fire('Annonce', 'a eté supprimer avec succès', 'success')
            this.getAnnonce()
          },
          error:(err)=>{
            Swal.fire('Erreur', '', 'error')
          }
        })

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Ignorer',
          '',
          'error'
        )
      }
    })

  }


}
