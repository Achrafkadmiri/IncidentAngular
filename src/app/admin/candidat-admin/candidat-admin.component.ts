import {Component, OnInit} from '@angular/core';
import {Recruteur} from "../../models/Recruteur";
import {Subject} from "rxjs";
import {ApiRecruteurService} from "../../services/api-recruteur-service.service";
import Swal from "sweetalert2";
import {ApiCandidatService} from "../../services/api-candidat.service";
import {Candidat} from "../../models/Candidat.module";

@Component({
  selector: 'app-candidat-admin',
  templateUrl: './candidat-admin.component.html',
  styleUrls: ['./candidat-admin.component.css']
})
export class CandidatAdminComponent implements OnInit{
  recruteurs!:Candidat[]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  constructor(private api:ApiCandidatService) {
  }
  ngOnInit(): void {
    this.dtOptions={
      pagingType:'full_numbers'
    }
    this.getAll()
  }

  getAll(){
    this.api.getAllCandidats().subscribe({
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
            Swal.fire('Candidat', 'a eté supprimer avec succès', 'success')
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
