import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {} from 'swiper/element/bundle';
import { register as registerSwipeElements } from 'swiper/element/bundle';

registerSwipeElements();
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
