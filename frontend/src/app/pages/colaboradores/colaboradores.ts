import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colaboradores.html',
  styleUrls: ['./colaboradores.scss']
})
export class Colaboradores {
  colaboradores = [
    {
      nome: 'Rodger Vidal Dias',
      avatar: 'assets/imagem2.png',
      github: 'https://github.com/rodgerdias',
      linkedin: 'https://linkedin.com/in/rodgerdias'
    },
    {
      nome: 'Pedro Revoredo',
      avatar: 'assets/imagem3.png',
      github: 'https://github.com/pedrorevoredo',
      linkedin: 'https://linkedin.com/in/pedrorevoredo'
    },
    {
      nome: 'Letícia de Souza',
      avatar: 'assets/imagem4.png',
      github: 'https://github.com/leticiadesouza',
      linkedin: 'https://linkedin.com/in/leticiadesouza'
    }
  ];
}
