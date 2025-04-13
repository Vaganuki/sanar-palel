import { Component } from '@angular/core';
import {MeteoComponent} from "../../features/meteo/compononents/meteo.component";
import {PanneauProdComponent} from "../../features/panneau-prod/components/panneau-prod/panneau-prod.component";
import {NavBarComponent} from '../../shared/components/layout/nav-bar/nav-bar.component';
import {LinkModel} from '../../shared/components/layout/nav-bar/models/link.model';

@Component({
  selector: 'app-estimation',
  imports: [
    MeteoComponent,
    PanneauProdComponent,
    NavBarComponent
  ],
  templateUrl: './estimation.component.html',
  styleUrl: './estimation.component.scss'
})
export class EstimationComponent {

  estimationLinks : LinkModel[] = [
    {
      url: "/",
      name: "Accueil"
    },
    {
      url:'/estimation#panneau-prod',
      name:'Panneau'
    },
    {
      url:'/estimation#meteo',
      name:'Meteo'
    },
  ]
}
