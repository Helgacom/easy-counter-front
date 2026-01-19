import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material/dialog';
import {JwtResponse} from '../model/jwt-response.model';
import {AuthenticateService} from '../service/authenticate.service';
import {Subscription} from 'rxjs';
import {AccountService} from '../service/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  currentUser: JwtResponse | null = null;
  subscription?: Subscription;

  constructor(private dialog: MatDialog,
              private authService: AuthenticateService,
              private accountService: AccountService
              ) { }

  ngOnInit(): void {
    this.authService.restoreSessionFromServer();
    this.subscription = this.accountService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  openLoginModal(): void {
    this.dialog.open(LoginComponent, {
      width: '400px',
      disableClose: true,
      hasBackdrop: true,
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
