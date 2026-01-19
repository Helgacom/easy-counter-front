import { Component, OnInit } from '@angular/core';
import {AccountService} from '../service/account.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  message: string | null = null;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.message = 'Приветствую, ' + this.accountService.getCurrentUser().username + '!';
    if (this.accountService.hasRole('ROLE_ADMIN')) {
      console.log(this.message);
    }
  }
}
