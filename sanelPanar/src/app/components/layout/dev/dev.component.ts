import { Component } from '@angular/core';
import {EnergyMapComponent} from '../../energy-map/energy-map.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dev',
  imports: [
    CommonModule,
    EnergyMapComponent
  ],
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.scss'
})
export class DevComponent {

}
