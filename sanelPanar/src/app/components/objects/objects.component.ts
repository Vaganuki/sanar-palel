import {Component, Input} from '@angular/core';
import {Devices} from '../../interfaces/devices';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-objects',
  imports: [
    Button
  ],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.scss'
})
export class ObjectsComponent {

   @Input({required: true}) data!: Devices[];

}
