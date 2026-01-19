import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountService} from '../service/account.service';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private accountService: AccountService,
              private toastr: ToastrService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRoles = route.data.roles as string[];
    const userRoles = this.accountService.getUserRoles();


    if (!userRoles || !requiredRoles) {
      this.router.parseUrl('/');
      this.toastr.error(
        'У вас нет прав на выбранную операцию!', 'Отказано.', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
          titleClass: 'toast-times-new-roman',
          messageClass: 'toast-times-new-roman'
        });
      return false;
    }

    const hasRole = requiredRoles.some(role => userRoles.includes(role));

    if (!hasRole) {
      this.router.parseUrl('/');
      this.toastr.error(
        'У вас нет прав на выбранную операцию!', 'Отказано.', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
          titleClass: 'toast-times-new-roman',
          messageClass: 'toast-times-new-roman'
        });
      return false;
    }
    return true;
  }
}
