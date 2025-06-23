import { bootstrapApplication } from '@angular/platform-browser';
import { routing } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [routing]
}).catch((err) => console.error(err));
