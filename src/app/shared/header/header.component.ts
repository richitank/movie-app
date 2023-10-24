import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  })
  
export class HeaderComponent {
  isSidenavOpen = false;

  // Function to toggle the side navigation menu
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}