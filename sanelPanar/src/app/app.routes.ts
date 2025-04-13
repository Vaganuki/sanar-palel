import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {EstimationComponent} from './components/estimation/estimation.component';

export const routes: Routes = [
  {
    path: 'estimation',
    component: EstimationComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
