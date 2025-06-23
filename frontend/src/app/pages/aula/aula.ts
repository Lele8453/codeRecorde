import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PIPE para usar links do YouTube com [src]
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-aula',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aula.html',
  styleUrls: ['./aula.scss'],
})
export class AulaComponent {
  codigo = '';
  novoComentario = '';
  comentarios = [
    {
      nome: 'Reinaldo Júnior',
      avatar: 'R',
      texto: 'Essa aula foi muito interessante! 😎'
    }
  ];

  // Coloque o link do YouTube no formato embed!
  private rawUrl = 'https://www.youtube.com/embed/YeGn9nGies0'; // Troque pelo seu vídeo!
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.rawUrl);
  }

  adicionarComentario() {
    if (this.novoComentario.trim()) {
      this.comentarios.push({
        nome: 'Você',
        avatar: 'V',
        texto: this.novoComentario
      });
      this.novoComentario = '';
    }
  }
}
