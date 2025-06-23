import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class Register {
  user = {
    nome: '',
    sobrenome: '',
    data: '',
    email: '',
    senha: '',
    confirmar: '',
    termos: false
  };

  senhaRequisitos = {
    tamanho: false,
    maiuscula: false,
    minuscula: false,
    numero: false,
    especial: false,
    obvia: true
  };
  senhaValida = false;

  hidePassword = true;
  hideConfirm = true;

  constructor(private router: Router) {}

  validateSenha() {
    const senha = this.user.senha || '';
    this.senhaRequisitos.tamanho = senha.length >= 8;
    this.senhaRequisitos.maiuscula = /[A-Z]/.test(senha);
    this.senhaRequisitos.minuscula = /[a-z]/.test(senha);
    this.senhaRequisitos.numero = /\d/.test(senha);
    this.senhaRequisitos.especial = /[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]+/.test(senha);
    this.senhaRequisitos.obvia = !/(123456|senha123|abcdef|qwerty)/i.test(senha);
    this.senhaValida =
      this.senhaRequisitos.tamanho &&
      this.senhaRequisitos.maiuscula &&
      this.senhaRequisitos.minuscula &&
      this.senhaRequisitos.numero &&
      this.senhaRequisitos.especial &&
      this.senhaRequisitos.obvia;
  }

  onSubmit() {
    // Aqui pode adicionar validações ou requisições para backend antes de redirecionar
    this.router.navigate(['/welcome']);
  }
}
