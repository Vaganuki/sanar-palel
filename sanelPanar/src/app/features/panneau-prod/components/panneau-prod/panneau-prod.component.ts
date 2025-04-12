import { Component } from '@angular/core';
import {Slider} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-panneau-prod',
  imports: [
    Slider,
    FormsModule,
    CommonModule
  ],
  templateUrl: './panneau-prod.component.html',
  styleUrl: './panneau-prod.component.scss'
})
export class PanneauProdComponent {
  value: number = 1;
}
