import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isNavbarCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  onToggleHome = () => {
    console.log('Авторизация пользователя - заглушка');
  }
}
