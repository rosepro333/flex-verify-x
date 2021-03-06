import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  accessType = '';
  constructor() { }

  ngOnInit(): void {
    this.getAccessType();
  }
  getAccessType = () => {
    this.accessType = Cookie.get('Access_Type');
  }
}
