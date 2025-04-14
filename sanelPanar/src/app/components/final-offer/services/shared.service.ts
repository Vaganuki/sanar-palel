import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DevicesModel} from '../../objects/models/devices.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private panneauxSource = new BehaviorSubject<number>(1);
  private devicesSource = new BehaviorSubject<DevicesModel[]>([]);

  panneau$ = this.panneauxSource.asObservable();
  devices$ = this.devicesSource.asObservable();

  setPanneaux(val: number) {
    this.panneauxSource.next(val);
  }

  setDevices(devices: DevicesModel[]) {
    this.devicesSource.next(devices);
  }
}
