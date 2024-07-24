import {Component, OnInit} from '@angular/core';
import {Recruteur} from "../../models/Recruteur";
import {Subject} from "rxjs";
import {ApiRecruteurService} from "../../services/api-recruteur-service.service";
import Swal from "sweetalert2";
import {ApiDemandeStageService} from "../../services/api-demande-stage.service";
import {DemandeStage} from "../../models/DemandeStage.module";

@Component({
  selector: 'app-demande-stage-admin',
  templateUrl: './demande-stage-admin.component.html',
  styleUrls: ['./demande-stage-admin.component.css']
})
export class DemandeStageAdminComponent implements OnInit{
  recruteurs!:DemandeStage[]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  constructor(private api:ApiDemandeStageService) {
  }
  ngOnInit(): void {
    this.dtOptions={
      pagingType:'full_numbers'
    }
    this.getAll()
  }

  getAll(){
    this.api.getDemandeStageServicesList().subscribe({
      next:(data) => {
        this.recruteurs = data;
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
        this.api.deleteDemande(id).subscribe({
          next:(data)=>{
            Swal.fire('Annonce', 'a eté supprimer avec succès', 'success')
            this.getAll()
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
