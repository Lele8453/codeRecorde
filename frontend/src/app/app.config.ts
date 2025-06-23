import { provideRouter, Route } from '@angular/router';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Colaboradores } from './pages/colaboradores/colaboradores';
import { Nivel } from './pages/nivel/nivel';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { WelcomeComponent } from './pages/welcome/welcome';
import { CursosComponent } from './pages/cursos/cursos';
import { VideosComponent } from './pages/videos/videos';
import { AulaComponent } from './pages/aula/aula';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'colaboradores', component: Colaboradores },
  { path: 'nivel', component: Nivel },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'videos', component: VideosComponent },         // Se quiser parâmetro: { path: 'videos/:id', component: VideosComponent }
  { path: 'aula/:id', component: AulaComponent },         // <- Aqui com parâmetro!
];

export const routing = provideRouter(routes);
