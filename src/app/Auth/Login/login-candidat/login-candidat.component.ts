import {Component, OnInit} from '@angular/core';
import {ApiAuthService} from "../../../services/api-auth.service";
import {Candidat} from "../../../models/Candidat.module";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-candidat',
  templateUrl: './login-candidat.component.html',
  styleUrls: ['./login-candidat.component.css']
})
export class LoginCandidatComponent implements OnInit{
  candidat!:Candidat
  LoginFormGroup!: FormGroup
  message!:Boolean
  constructor(private api:ApiAuthService ,private fb:FormBuilder,private router:Router) {
  }
  ngOnInit(): void {
    this.LoginFormGroup = this.fb.group({
      username: this.fb.control(null),
      password: this.fb.control(null),

    })
  }
loginCandidat(){
    this.api.LoginCandidat(this.LoginFormGroup.value).subscribe({
      next:data =>{
      this.candidat=data
        if (data != null){
          this.authenticateCandidat()
          this.message= true
          this.router.navigateByUrl("/v1/Accueil")
        }else {
          Swal.fire('Erreur', 'username ou le mot de passe est incorrect', 'error')
          this.message=false
        }

      },
      error :err => Swal.fire('Erreur', 'username ou le mot de passe est incorrect', 'error')
    })

}
authenticateCandidat(){
   return  localStorage.setItem("AuthCandidat",JSON.stringify({username:this.candidat.username,roles:this.candidat.roles,id:this.candidat.id,nomComplet:this.candidat.prenom+" "+ this.candidat.nom}))
}
isAuthenticate(){
  return  localStorage.getItem("AuthCandidat") != null
}
logout(){
  localStorage.removeItem("AuthCandidat")
  localStorage.removeItem("AuthRecruteur")
  localStorage.removeItem("AuthAdmin")
  this.router.navigateByUrl("/v2/LoginAdmin")
}



}
