import {CanActivateFn, Router} from '@angular/router';
import {LoginCandidatComponent} from "../Auth/Login/login-candidat/login-candidat.component";
import {inject} from "@angular/core";
import {LoginRecruteurComponent} from "../Auth/Login/login-recruteur/login-recruteur.component";

export const authCandidatGuard: CanActivateFn = (route, state) => {
  let router=inject(Router)
  const oauthService: LoginCandidatComponent = inject(LoginCandidatComponent)
  const oauthServiceR: LoginRecruteurComponent = inject(LoginRecruteurComponent)

  if(oauthService.isAuthenticate()){
    return true;
  }else{
    router.navigateByUrl("/v1/LoginCandidat")
    return false;
  }
};
