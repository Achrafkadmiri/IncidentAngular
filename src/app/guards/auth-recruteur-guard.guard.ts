import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginRecruteurComponent} from "../Auth/Login/login-recruteur/login-recruteur.component";

export const authRecruteurGuard: CanActivateFn = (route, state) => {
  let router=inject(Router)
  const oauthService: LoginRecruteurComponent = inject(LoginRecruteurComponent)

  if(oauthService.isAuthenticate()){
    return true;
  }else{
    router.navigateByUrl("/v1/LoginRecruteur")
    return false;
  }
};
