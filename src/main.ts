import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/app-routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    provideRouter(ROUTES),
    provideHttpClient(withFetch())
  ]
}).catch(err => console.error(err));
