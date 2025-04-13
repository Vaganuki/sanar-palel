import { Component } from '@angular/core';
import {MeteoComponent} from "../../meteo/meteo.component";
import {PanneauProdComponent} from "../../panneau-prod/panneau-prod.component";
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {LinkModel} from '../nav-bar/models/link.model';
import {ObjectsComponent} from '../../objects/objects.component';
import {DevicesModel} from '../../objects/models/devices.model';

@Component({
  selector: 'app-estimation',
  imports: [
    MeteoComponent,
    PanneauProdComponent,
    NavBarComponent,
    ObjectsComponent
  ],
  templateUrl: './estimation.component.html',
  styleUrl: './estimation.component.scss'
})
export class EstimationComponent {

  placeHolder: DevicesModel[] = [

  ];

  estimationLinks : LinkModel[] = [
    {
      url: "/",
      name: "Accueil"
    },
    {
      url:'/estimation#objet',
      name: "Mes appareils électroniques"
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
