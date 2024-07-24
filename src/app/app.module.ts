import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {LoginCandidatComponent} from "./Auth/Login/login-candidat/login-candidat.component";
import {RegisterCandidatComponent} from "./Auth/Login/register-candidat/register-candidat.component";
import {LoginRecruteurComponent} from "./Auth/Login/login-recruteur/login-recruteur.component";
import {RegisterRecruteurComponent} from "./Auth/Login/register-recruteur/register-recruteur.component";

import { NavBarAdminComponent } from './admin/nav-bar-admin/nav-bar-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {DataTablesModule} from "angular-datatables";
import { AdminOffreStageComponent } from './admin/admin-offre-stage/admin-offre-stage.component';
import { RecruteurAdminComponent } from './admin/recruteur-admin/recruteur-admin.component';
import { CandidatAdminComponent } from './admin/candidat-admin/candidat-admin.component';
import { AnnoncePriveeRecruteurComponent } from './admin/annonce-privee-recruteur/annonce-privee-recruteur.component';
import { CvListComponent } from './admin/cv-list/cv-list.component';
import {DemandeStageAdminComponent} from "./admin/demande-stage-admin/demande-stage-admin.component";
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ChartAreaComponent } from './chart-area/chart-area.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import {LoginAdminComponent} from "./Auth/Login/login-admin/login-admin.component";
import { AnnoncePriveeComponent } from './admin/annonce-privee/annonce-privee.component';
import { AccueilComponent } from './admin/accueil/accueil.component';
import { NoTraitedComponent } from './admin/no-traited/no-traited.component';
import { TraitedComponent } from './admin/traited/traited.component';
import { DateFormatterPipe } from './pipe/date-formatter.pipe';
import { ChartIncidentComponent } from './admin/chart-incident/chart-incident.component';
import { ChartIncidentTraitedComponent } from './admin/chart-incident-traited/chart-incident-traited.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginCandidatComponent,
    RegisterCandidatComponent,
    LoginRecruteurComponent,
    RegisterRecruteurComponent,
    NavBarAdminComponent,
    DashboardComponent,
    AdminOffreStageComponent,
    RecruteurAdminComponent,
    CandidatAdminComponent,
    AnnoncePriveeRecruteurComponent,
    CvListComponent,
    DemandeStageAdminComponent,
    ChartBarComponent,
    ChartAreaComponent,
    ChartPieComponent,
    LoginAdminComponent,
    AnnoncePriveeComponent,
    AccueilComponent,
    NoTraitedComponent,
    TraitedComponent,
    DateFormatterPipe,
    ChartIncidentComponent,
    ChartIncidentTraitedComponent,
    ChartIncidentTraitedComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        DataTablesModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [LoginCandidatComponent,LoginRecruteurComponent,LoginAdminComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
