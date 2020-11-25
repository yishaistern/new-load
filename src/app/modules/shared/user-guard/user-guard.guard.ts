import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service/user-service.service';
import { map } from 'rxjs/operators';
type canActivateRes = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
@Injectable()
export class UserGuardGuard implements CanActivate {
  constructor(private user: UserServiceService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): canActivateRes {
      if (this.user.isUserLogged()) {
        return true;
      } else {
        return this.user.getUser().pipe(
          map((data) => {
            return (this.user.isUserLogged());
          })
        );
      }
  }

}
