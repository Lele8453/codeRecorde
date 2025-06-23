import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.html',
  styleUrls: ['./videos.scss'],
})
export class VideosComponent {
  videos = [
    { numero: 1, imagem: 'assets/imagem14.png' },
    { numero: 2, imagem: 'assets/imagem15.jpg' },
    { numero: 3, imagem: 'assets/imagem16.jpg' },
    { numero: 4, imagem: 'assets/imagem17.jpg' },
    { numero: 5, imagem: 'assets/imagem18.jpg' },
    { numero: 6, imagem: 'assets/imagem19.jpg' }
  ];

  constructor(private router: Router) {}

  irParaAula(numero: number) {
    console.log('Indo para /aula/' + numero); // debug
    this.router.navigate(['/aula', numero]);
  }
}
