import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- Importante!

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  constructor(private router: Router) {}

  irParaLogin() {
    this.router.navigate(['/login']);
  }

  irParaSobre() {
    this.router.navigate(['/sobre']);
  }
}
