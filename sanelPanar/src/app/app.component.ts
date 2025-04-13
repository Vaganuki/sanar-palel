import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './components/layout/nav-bar/nav-bar.component';
import {HomeComponent} from './components/layout/home/home.component';
import {MeteoComponent} from './components/meteo/meteo.component';
import {PanneauProdComponent} from './components/panneau-prod/panneau-prod.component';
import {LoaderComponent} from './components/layout/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, PanneauProdComponent, NavBarComponent, MeteoComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SolaTrack';
}
