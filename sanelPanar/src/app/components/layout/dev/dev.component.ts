import { Component } from '@angular/core';
import {EnergyMapComponent} from '../../energy-map/energy-map.component';

@Component({
  selector: 'app-dev',
  imports: [
    EnergyMapComponent
  ],
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.scss'
})
export class DevComponent {

}
