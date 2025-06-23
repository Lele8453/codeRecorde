import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.scss'],
})
export class WelcomeComponent {
  user = {
    nome: '',
    bio: '',
    role: 'aluno',
  };

  constructor(private router: Router) {}

  continuar() {
    // Para depuração: veja se aparece no console
    console.log('Chamou continuar!', this.user);
    this.router.navigate(['/cursos']);
  }
}
