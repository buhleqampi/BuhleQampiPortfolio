import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarVisible = false; 

  toggleNavbar() {
    console.log("Hello")
    console.log( this.isNavbarVisible)
    this.isNavbarVisible = !this.isNavbarVisible;
  }
}
