import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  charge: WritableSignal<boolean> = signal(false);

  constructor(private http: HttpClient) {
    this.loadCharge();
  }

  loadCharge(){
    setTimeout(() => {
      this.http.get<Charge>("http://mc.jeffwars.net/phoneinfo").subscribe((out) => {
        this.charge.set(out.charge);
      })
      this.loadCharge();
    }, 1000);
    // console.log('Charge service loaded');
  }

}

export interface Charge{
  charge: boolean;
}
