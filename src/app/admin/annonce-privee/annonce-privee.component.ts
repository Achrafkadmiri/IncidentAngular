import {Component, OnInit} from '@angular/core';
import {AnnonceEmp} from "../../models/AnnonceEmp.module";
import {Recruteur} from "../../models/Recruteur";
import {Subject} from "rxjs";
import {ApiAnnonceEmpService} from "../../services/api-annonce-emp.service";
import {ApiRecruteurService} from "../../services/api-recruteur-service.service";
import {ActivatedRoute} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-annonce-privee',
  templateUrl: './annonce-privee.component.html',
  styleUrls: ['./annonce-privee.component.css']
})
export class AnnoncePriveeComponent implements OnInit{
  annonces!:AnnonceEmp[]
  recruteur!:Recruteur
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  id!:number
  constructor(private api:ApiAnnonceEmpService, private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.dtOptions={
      pagingType:'full_numbers'
    }
    this.route.params.subscribe(params => {
      //console.log(params);
      this.getAnnonces()
      this.dtTrigger.next(null);
    });

  }
  getAnnonces(){
    this.api.getAllAnnoncesEmp().subscribe({
      next:(data)=>{
        this.annonces=data;
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
            this.getAnnonces()
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
