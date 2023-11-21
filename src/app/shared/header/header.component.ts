import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  })
  
export class HeaderComponent {
  isSidenavOpen = false;

  constructor (private sharedService: SharedService) {}

  updateOption(option: string){
    this.sharedService.updateSelectedOption(option);
  }
  // Function to toggle the side navigation menu
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}