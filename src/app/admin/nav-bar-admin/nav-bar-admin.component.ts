import {Component, OnInit} from '@angular/core';
import {LoginCandidatComponent} from "../../Auth/Login/login-candidat/login-candidat.component";



@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit{

    protected readonly localStorage = localStorage;
constructor(public auth:LoginCandidatComponent) {
}
  ngOnInit(): void {
  }
}
