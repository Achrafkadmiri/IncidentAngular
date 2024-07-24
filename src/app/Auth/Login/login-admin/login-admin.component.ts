import { Component } from '@angular/core';
import {Candidat} from "../../../models/Candidat.module";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiAuthService} from "../../../services/api-auth.service";
import {Router} from "@angular/router";
import {Admin} from "../../../models/Admin.module";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['../login-candidat/login-candidat.component.css']
})
export class LoginAdminComponent {
  admin!:Admin
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
  loginAdmin(){
    this.api.LoginAdmin(this.LoginFormGroup.value).subscribe({
      next:data =>{
        this.admin=data
        if (data != null){
          this.authenticateAdmin()
          this.message= true
          this.router.navigateByUrl("/v2/Dashboard")
        }else {
          Swal.fire('Error', 'Username or Password is wrong', 'error')
          this.message=false
        }

      },
      error :err =>  Swal.fire('Error', 'Username or Password is wrong', 'error')
    })

  }
  authenticateAdmin(){
    return  localStorage.setItem("AuthAdmin",JSON.stringify({username:this.admin.username,id:this.admin.id}))
  }
  isAuthenticate(){
    return  localStorage.getItem("AuthAdmin") != null
  }

}
