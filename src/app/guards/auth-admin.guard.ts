import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginAdminComponent} from "../Auth/Login/login-admin/login-admin.component";

export const authAdminGuard: CanActivateFn = (route, state) => {
  let router=inject(Router)
  const oauthService: LoginAdminComponent = inject(LoginAdminComponent)

  if(oauthService.isAuthenticate()){
    return true;
  }else{
    router.navigateByUrl("/v1/LoginAdmin")
    return false;
  }
};
