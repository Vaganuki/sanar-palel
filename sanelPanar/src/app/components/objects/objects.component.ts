import {Component, Input} from '@angular/core';
import {Devices} from '../../interfaces/devices';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-objects',
  imports: [
    Button,
    InputText,
    InputNumberModule
  ],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.scss'
})
export class ObjectsComponent {

   @Input({required: true}) data!: Devices[];
   edit: Devices|undefined;

   onEdit() : void{
     this.edit = {
       name: "",
       consomation: 0
     }
   }

  onEditName(value: Event){
     if(this.edit){
       if(value.target instanceof HTMLInputElement) {
         this.edit.name = value.target.value;
       }
     }
   }

  onEditConsommation(value: Event){
    if(this.edit){
      if(value.target instanceof HTMLInputElement) {
        this.edit.consomation = Number(value.target.value);
      }
    }
  }

   onSubmit() : void{
     if(this.edit){
       this.data.push(this.edit);
       this.edit = undefined;
     }
   }

   onCancel(){
     this.edit = undefined;
   }

}
