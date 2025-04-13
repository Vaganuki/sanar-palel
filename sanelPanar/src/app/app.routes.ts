import { Routes } from '@angular/router';
import {HomeComponent} from './components/layout/home/home.component';
import {EstimationComponent} from './components/layout/estimation/estimation.component';
import {DevComponent} from './components/layout/dev/dev.component';

export const routes: Routes = [
  {
    path: 'estimation',
    component: EstimationComponent
  },
  {
    path:'dev',
    component: DevComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
