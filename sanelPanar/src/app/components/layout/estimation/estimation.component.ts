import {Component, effect} from '@angular/core';
import {MeteoComponent} from "../../meteo/meteo.component";
import {PanneauProdComponent} from "../../panneau-prod/panneau-prod.component";
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {LinkModel} from '../nav-bar/models/link.model';
import {ObjectsComponent} from '../../objects/objects.component';
import {DevicesModel} from '../../objects/models/devices.model';
import {EnergyMapComponent} from '../../energy-map/energy-map.component';
import {ChargeService} from '../../../services/charge.service';
import {FinalOfferComponent} from '../../final-offer/final-offer.component';

@Component({
  selector: 'app-estimation',
  imports: [
    MeteoComponent,
    PanneauProdComponent,
    NavBarComponent,
    ObjectsComponent,
    EnergyMapComponent,
    FinalOfferComponent
  ],
  templateUrl: './estimation.component.html',
  styleUrl: './estimation.component.scss'
})
export class EstimationComponent {

  constructor(private chargeService: ChargeService){
    effect(() => {
      let model: DevicesModel|undefined = this.placeHolder.find((device) => device.id  == 0);
      if(model){
        model.consomation = (chargeService.charge()) ? 150 : 0;
      }
    });
  }

  placeHolder: DevicesModel[] = [
    {
      id: 0,
      name: 'Phone of The FAST',
      consomation: 0
    }
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
