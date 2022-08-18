import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class AuthGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
  
// }

export class AuthGuard implements CanActivate {

  authService: any;

  router: any;

  canActivate(

    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): boolean |  Promise<boolean>{
      var isAuthenticated = this.authService.getAuthStatus();

      if (!isAuthenticated) {

          this.router.navigate(['/Home']);

      }

      return isAuthenticated;

  }

 

}