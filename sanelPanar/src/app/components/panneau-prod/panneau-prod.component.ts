import {Component, EventEmitter, Output} from '@angular/core';
import {Slider} from 'primeng/slider';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Card} from 'primeng/card';
import {InputNumber} from 'primeng/inputnumber';
import {SharedService} from '../final-offer/services/shared.service';

@Component({
  selector: 'app-panneau-prod',
  imports: [
    Slider,
    FormsModule,
    CommonModule,
    Card,
    InputNumber
  ],
  templateUrl: './panneau-prod.component.html',
  styleUrl: './panneau-prod.component.scss'
})
export class PanneauProdComponent {
  value: number = 1;

  constructor(private shared: SharedService) {}

  onValueChange(newVal: number) {
    this.value = newVal;
    this.shared.setPanneaux(newVal); // 🔁 Update global state
  }

}
