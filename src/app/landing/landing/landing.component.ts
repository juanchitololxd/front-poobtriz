import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irAPantalla1() {
    this.router.navigate(['/game']);
  }

  irAPantalla2() {
    this.router.navigate(['/pantalla2']);
  }

  irAPantalla3() {
    this.router.navigate(['/pantalla3']);
  }

}
