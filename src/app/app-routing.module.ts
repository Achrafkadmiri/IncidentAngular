import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NavBarAdminComponent} from "./admin/nav-bar-admin/nav-bar-admin.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {AdminOffreStageComponent} from "./admin/admin-offre-stage/admin-offre-stage.component";
import {RecruteurAdminComponent} from "./admin/recruteur-admin/recruteur-admin.component";
import {AnnoncePriveeRecruteurComponent} from "./admin/annonce-privee-recruteur/annonce-privee-recruteur.component";
import {CandidatAdminComponent} from "./admin/candidat-admin/candidat-admin.component";
import {CvListComponent} from "./admin/cv-list/cv-list.component";
import {DemandeStageAdminComponent} from "./admin/demande-stage-admin/demande-stage-admin.component";

import {LoginAdminComponent} from "./Auth/Login/login-admin/login-admin.component";
import {authAdminGuard} from "./guards/auth-admin.guard";
import {AnnoncePriveeComponent} from "./admin/annonce-privee/annonce-privee.component";

import {AccueilComponent} from "./admin/accueil/accueil.component";
import {TraitedComponent} from "./admin/traited/traited.component";
import {NoTraitedComponent} from "./admin/no-traited/no-traited.component";


const routes: Routes = [
  { path: '', redirectTo: '/v2/LoginAdmin', pathMatch: 'full' },

  {
    path: "v2", component: NavBarAdminComponent, children: [
      {path: "LoginAdmin", component: LoginAdminComponent},

    ]
  },
  {
    path: "v2", component: NavBarAdminComponent,canActivate:[authAdminGuard], children: [
      {path: "Dashboard", component: AccueilComponent},
      {path: "OffreStage", component: AdminOffreStageComponent},
      {path: "PrivéeRecruteur/:id", component: AnnoncePriveeRecruteurComponent},
      {path: "CvList/:id/:statut", component: CvListComponent},
      {path: "Traited", component: TraitedComponent},
      {path: "NoTraited", component: NoTraitedComponent},
      {path: "DemandeStage", component: DemandeStageAdminComponent},
      {path: "AnnoncePrive", component: AnnoncePriveeComponent}


    ]
  },
  {path: "**", redirectTo: "v1/PageNotFound"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
