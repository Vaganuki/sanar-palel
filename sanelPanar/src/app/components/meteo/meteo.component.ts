import {Component, Inject, inject, PLATFORM_ID} from '@angular/core';
import {GeolocalisationService} from './services/geolocalisation.service';
import { MatCardModule } from '@angular/material/card';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {MeteoService} from './services/meteo.service';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-meteo',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.scss'
})
export class MeteoComponent {

  private readonly _geolocation = inject(GeolocalisationService);
  private readonly _meteo = inject(MeteoService);

  longitude: number = 500;
  latitude: number = 500;

  dailyWeather: {
    max: number;
    min: number;
    sun: number;
  }[] = [];
  jours: string[] = [];


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {  }
  position : string = "Recherche en cours...";
  weatherData: any = "test";
  ngOnInit() {
    this.jours = Array.from({ length: 5 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return date.toLocaleDateString('fr-FR', { weekday: 'short' }); // ex: lun., mar., ...
    });
    if (isPlatformBrowser(this.platformId)){
      if (typeof window !== 'undefined' && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;

          this._geolocation.getAdressFromCoord(this.latitude, this.longitude)
            .subscribe((res: any) => {
              const address = res.address;
              const city =
                address.city || address.town || address.village || address.hamlet || 'Inconnu 🕵️‍♀️';
              this.position = city;
            });

          this._meteo.getWeather(this.latitude, this.longitude)
            .subscribe((data: any) => {
              this.weatherData = data.daily;
            });
          this.dailyWeather = Array.from({ length: 5 }).map((_, i) => ({
            max: this.weatherData.temperature_2m_max[i],
            min: this.weatherData.temperature_2m_min[i],
            sun: +(this.weatherData.sunshine_duration[i] / 3600).toFixed(1),
          }));
        }, (error) => {
          console.error('Erreur de géolocalisation :', error);
        });
      }
    } else {
      console.warn("La géolocalisation n'est pas disponible.");
    }
  }
  customCity: string = '';

  onCitySearch() {
    if (!this.customCity) return;

    this._geolocation.getCoordFromAdress(this.customCity).subscribe((res: any) => {
      const location = res[0];
      this.latitude = parseFloat(location.lat);
      this.longitude = parseFloat(location.lon);
      this.position = location.display_name;

      this._meteo.getWeather(this.latitude, this.longitude).subscribe((data: any) => {
        this.weatherData = data.daily;
      });
    });
  }
}
