import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadLobbyGuard implements CanActivate {
  constructor(private router: Router){};

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean  {
      let isLoggedIn = localStorage.getItem('nick')!
      if (isLoggedIn){
        return true
      } else {
        this.router.navigate(['/lobby/create']);
      }
      return false
  }

}
