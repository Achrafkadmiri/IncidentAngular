import {Component, OnInit} from '@angular/core';
import {AnnonceStage} from "../../models/AnnonceStage.module";
import {Subject} from "rxjs";
import {ApiAnnonceStageService} from "../../services/api-annonce-stage.service";
import Swal from "sweetalert2";
import {ApiRecruteurService} from "../../services/api-recruteur-service.service";
import {Recruteur} from "../../models/Recruteur";

@Component({
  selector: 'app-recruteur-admin',
  templateUrl: './recruteur-admin.component.html',
  styleUrls: ['./recruteur-admin.component.css']
})
export class RecruteurAdminComponent implements OnInit{
  recruteurs!:Recruteur[]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  constructor(private api:ApiRecruteurService) {
  }
  ngOnInit(): void {
    this.dtOptions={
      pagingType:'full_numbers'
    }
    this.getAll()
  }

  getAll(){
    this.api.getAllRecruteurs().subscribe({
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
        this.api.delete(id).subscribe({
          next:(data)=>{
            Swal.fire('Recruteur', 'a eté supprimer avec succès', 'success')
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
