import { Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('navCollapse') navCollapse!: ElementRef;

  closeNavbar(): void {
    // Close only on mobile view
    if (window.innerWidth < 992) {
      const collapse = new bootstrap.Collapse(
        this.navCollapse.nativeElement,
        { toggle: false }
      );
      collapse.hide();
    }
  }
}
