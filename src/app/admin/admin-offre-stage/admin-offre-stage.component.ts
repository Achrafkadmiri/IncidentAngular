import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ApiAnnonceStageService} from "../../services/api-annonce-stage.service";
import {AnnonceStage} from "../../models/AnnonceStage.module";
import {Subject} from "rxjs";
import {DataTableDirective} from "angular-datatables";
import Swal from "sweetalert2";

@Component({
  selector: 'app-admin-offre-stage',
  templateUrl: './admin-offre-stage.component.html',
  styleUrls: ['../nav-bar-admin/nav-bar-admin.component.css']
})
export class AdminOffreStageComponent implements OnInit{
  annonces!:AnnonceStage[]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  constructor(private api:ApiAnnonceStageService) {
  }
  ngOnInit(): void {
    this.dtOptions={
      pagingType:'full_numbers'
    }
    this.getAll()
  }

  getAll(){
    this.api.getAllAnnoncesStage().subscribe({
      next:(data) => {
        this.annonces = data;
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
