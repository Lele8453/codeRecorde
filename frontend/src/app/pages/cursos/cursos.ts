import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.scss'],
})
export class CursosComponent {
  cursosIndicados = [
    {
      img: '/assets/imagem8.jpg',
      titulo: 'HTML5 e CSS3: Módulo 5 de 5',
      descricao: 'Aprender a criar sites do zero nunca foi tão acessível!',
      info: '20 HORAS',
      link: '/videos' // <-- Agora vai para a página videos!
    },
    {
      img: '/assets/imagem7.jpg',
      titulo: 'Java Básico',
      descricao: 'O melhor início para quem está começando do zero!',
      info: '20 HORAS',
      link: '/cursos/ingles-02'
    }
  ];

  outrosCursos = [
    {
      img: '/assets/imagem9.jpg',
      titulo: 'Python 3 – Mundo 1',
      descricao: 'Curso Gratuito de Python 3: Descubra o caminho para uma nova carreira.',
      info: '20 HORAS',
      link: '/cursos/ingles-03'
    },
    {
      img: '/assets/imagem10.jpg',
      titulo: 'Algoritmo',
      descricao: 'Aprenda a lógica de programar.',
      info: '40 HORAS',
      link: '/cursos/html-css5'
    },
    {
      img: '/assets/imagem12.jpg',
      titulo: 'Git e GitHub',
      descricao: 'Se você quer aprender Git e GitHub de forma simples e prática.',
      info: '40 HORAS',
      link: '/cursos/html-css5'
    }
  ];

  constructor(private router: Router) {}

  irPara(link: string) {
    this.router.navigateByUrl(link);
  }
}
