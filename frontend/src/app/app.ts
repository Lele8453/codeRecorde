import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
