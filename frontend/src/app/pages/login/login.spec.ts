import { Component } from '@angular/core';
// Importação correta para standalone: RouterLink!
import { RouterLink } from '@angular/router';

// Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: true,
  imports: [
    RouterLink,           // <<--- Aqui está a mudança chave!
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class Login {
  hide = true;
}
