import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  screenWidth = window.innerWidth;
  constructor() { }

  ngOnInit(): void {
  }

  isAMobile() {
    if (this.screenWidth >= 650) {
      return false;
    }
    return true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = event.target.innerWidth;
  }

}
