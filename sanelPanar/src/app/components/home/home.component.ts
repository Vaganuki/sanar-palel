import { Component } from '@angular/core';
import {Splitter} from "primeng/splitter";
import {Button} from 'primeng/button';
import {ObjectsComponent} from '../objects/objects.component';
import {Devices} from '../../interfaces/devices';
import {GraphGlobalUsageComponent} from '../graph-global-usage/graph-global-usage.component';

@Component({
  selector: 'app-home',
  imports: [
    Splitter,
    Button,
    ObjectsComponent,
    GraphGlobalUsageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  data!: Devices[];

  constructor() {
    this.data = [
      {
        name: "Four",
        consomation: 24.2
      }
    ];
  }

}
