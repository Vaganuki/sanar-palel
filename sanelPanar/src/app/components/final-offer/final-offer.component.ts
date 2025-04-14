import { Component } from '@angular/core';
import {DevicesModel} from '../objects/models/devices.model';
import {DecimalPipe} from '@angular/common';
import {SharedService} from './services/shared.service';

@Component({
  selector: 'app-final-offer',
  imports: [
    DecimalPipe
  ],
  templateUrl: './final-offer.component.html',
  styleUrl: './final-offer.component.scss'
})
export class FinalOfferComponent {
  panneaux: number = 0;
  devices: DevicesModel[] = [];

  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.shared.panneau$.subscribe(val => this.panneaux = val);
    this.shared.devices$.subscribe(devs => this.devices = devs);
  }
  get consommationTotale(): number {
    return this.devices.reduce((total, obj) => total + obj.consomation, 0);
  }

  protected readonly Math = Math;
}
