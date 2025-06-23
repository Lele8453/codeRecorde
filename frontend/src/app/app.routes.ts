import { Login } from './pages/login/login';

export const routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  // ... outras rotas
];
