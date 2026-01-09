import { Component, OnInit } from '@angular/core';
import {VERSION} from '../model/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version = VERSION;
  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
