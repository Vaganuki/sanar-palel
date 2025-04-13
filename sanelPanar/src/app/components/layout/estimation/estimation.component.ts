import { Component } from '@angular/core';
import {MeteoComponent} from "../../meteo/meteo.component";
import {PanneauProdComponent} from "../../panneau-prod/panneau-prod.component";
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {LinkModel} from '../nav-bar/models/link.model';
import {ObjectsComponent} from '../../objects/objects.component';
import {DevicesModel} from '../../objects/models/devices.model';
import {EnergyMapComponent} from '../../energy-map/energy-map.component';
import {FinalOfferComponent} from '../../final-offer/final-offer.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-estimation',
  imports: [
    MeteoComponent,
    PanneauProdComponent,
    NavBarComponent,
    ObjectsComponent,
    EnergyMapComponent,
    FinalOfferComponent,
    FooterComponent
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
    {
      url:'/estimation#graph',
      name:'Luminosité sur les prochains jours'
    },
    {
      url:'/estimation#resume',
      name:'Résumé'
    }
  ]
}
