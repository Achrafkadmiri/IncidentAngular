import {Component, OnInit} from '@angular/core';
import {Candidat} from "../../../models/Candidat.module";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiAuthService} from "../../../services/api-auth.service";
import {Recruteur} from "../../../models/Recruteur";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register-recruteur',
  templateUrl: './register-recruteur.component.html',
  styleUrls: ['../login-candidat/login-candidat.component.css']
})
export class RegisterRecruteurComponent implements OnInit{

  recruteur!:Recruteur
  RegisterFormGroup!: FormGroup
  constructor(private api:ApiAuthService ,private fb:FormBuilder) {
  }
  ngOnInit(): void {
    this.RegisterFormGroup = this.fb.group({
      nomEntreprise: this.fb.control(null,[Validators.required]),
      email: this.fb.control(null,[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      description: this.fb.control(null,[Validators.required]),
      username: this.fb.control(null,[Validators.required]),
      ville: this.fb.control(null,[Validators.required]),
      telephone: this.fb.control(null,[Validators.required]),
      password: this.fb.control(null,[Validators.required ,Validators.minLength(6)]),
      Cpassword:this.fb.control(null,[Validators.required])
    })
  }
  saveRecruteur(){
    this.api.RegisterRecruteur(this.RegisterFormGroup.value).subscribe({
      next:data =>{
        this.recruteur=data
        this.RegisterFormGroup.reset()
        Swal.fire('succès', 'a eté créé avec succès', 'success')
      },
      error:(err)=>{
        Swal.fire('Erreur', '', 'error')
      }

    })
  }
  getErrorMessage(name: string, errors: any):string {
    if(errors['required']){
      return name + " champs obligatoire";
    } else if (errors['minlength']){
      return name +" avoir min "+errors['minlength']['requiredLength']+" caractères";
    }else if (errors['pattern']){
      return name +" doit etre sous la forme suivante xyz@example.com";
    }
    else return "";
  }
}
