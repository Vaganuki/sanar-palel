import {Component, Input} from '@angular/core';
import {DevicesModel} from './models/devices.model';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-objects',
  imports: [
    Button,
    InputText,
    InputNumberModule,
    FormsModule
  ],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.scss'
})
export class ObjectsComponent {

   @Input({required: true}) data: DevicesModel[] = [];
   edit: DevicesModel|undefined;

   onEdit() : void{
     this.edit = {
       id: 0,
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
    console.log('oui');
    if(this.edit){
      if(value.target instanceof HTMLInputElement) {
        this.edit.consomation = Number(value.target.value);
      }
    }
  }

   onSubmit() : void{
     if(this.edit){
       this.edit.id = this.data.length >= 1 ? Math.max(...this.data.map(item => item.id)) + 1 : 1;
       this.data.push(this.edit);
       this.edit = undefined;
     }
   }

   onCancel(){
     this.edit = undefined;
   }

   onDelete(id : number){
     const index = this.data.findIndex(item => item.id === id);
     if (index !== -1) {
       this.data.splice(index, 1);
     }
   }
}
