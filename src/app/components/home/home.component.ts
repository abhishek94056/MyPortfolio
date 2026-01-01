import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('typing', { static: true }) typingElement!: ElementRef;

  ngAfterViewInit(): void {
    new Typed(this.typingElement.nativeElement, {
      strings: ['Java Developer', 'Spring Boot Developer', 'Full Stack Developer'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true
    });
  }
}
