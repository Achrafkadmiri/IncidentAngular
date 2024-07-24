import {Component, OnInit} from '@angular/core';
import {Candidat} from "../../../models/Candidat.module";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiAuthService} from "../../../services/api-auth.service";
import {Router} from "@angular/router";
import {Recruteur} from "../../../models/Recruteur";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-recruteur',
  templateUrl: './login-recruteur.component.html',
  styleUrls: ['../login-candidat/login-candidat.component.css']
})
export class LoginRecruteurComponent implements OnInit{


  candidat!:Candidat
  recruteur!:Recruteur
  LoginFormGroup!: FormGroup
  message!:String
  constructor(private api:ApiAuthService ,private fb:FormBuilder,private router:Router) {
  }
  ngOnInit(): void {
    this.LoginFormGroup = this.fb.group({
      username: this.fb.control(null),
      password: this.fb.control(null),

    })
  }
  loginCandidat(){
    this.api.LoginRecruteur(this.LoginFormGroup.value).subscribe({
      next:data =>{
        this.recruteur=data
        if (data != null){
          this.authenticateCandidat()

          this.router.navigateByUrl("/v1/AccueilRecruteur")
        }else {
          Swal.fire('Erreur', 'username ou le mot de passe est incorrect', 'error')

        }

      },
      error :err =>  Swal.fire('Erreur', 'username ou le mot de passe est incorrect', 'error')
    })

  }
  authenticateCandidat(){
    if(!this.isAuthenticate()){
      localStorage.setItem("AuthRecruteur",JSON.stringify({username:this.recruteur.username,id:this.recruteur.id,nomEntreprise:this.recruteur.nomEntreprise}))
      localStorage.removeItem("AuthCandidat")
    }

  }
  isAuthenticate(){
    return  localStorage.getItem("AuthRecruteur") != null
  }



}
