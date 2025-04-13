import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as L from 'leaflet';
import {RegionModel} from './model/region.model';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-energy-map',
  imports: [],
  templateUrl: './energy-map.component.html',
  styleUrl: './energy-map.component.scss'
})
export class EnergyMapComponent implements OnInit {
  private map: any;

  private regions: RegionModel[] = [
    { name: 'Namur', coords: [50.4669, 4.8674] },
    { name: 'Liège', coords: [50.6326, 5.5797] },
    { name: 'Bruxelles', coords: [50.8503, 4.3517] },
    { name: 'Hainaut', coords: [50.45, 3.95] },
    { name: 'Luxembourg', coords: [49.8333, 5.4167] },
    { name: 'Brabant Wallon', coords: [50.7167, 4.6167] },
    { name: 'Flandre Orientale', coords: [51.05, 3.7333] },
    { name: 'Flandre Occidentale', coords: [51.05, 3.2] },
    { name: 'Anvers', coords: [51.2194, 4.4025] },
    { name: 'Limbourg', coords: [50.95, 5.5] },
    { name: 'Brabant Flamand', coords: [50.9, 4.5] }
  ];

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initMap();
      this.regions.forEach(region => this.loadRegionData(region));
    }
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [50.5, 4.5], // Centré sur la Belgique
      zoom: 8
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private loadRegionData(region: { name: string; coords: [number, number] }): void {
    const apiUrl = `https://hackathon-helmo-2025-a0e46b409def.herokuapp.com/data/${region.name}`;

    this.http.get<any>(apiUrl).subscribe(data => {
      const load = data?.value || 0;

      const circle = L.circle(region.coords, {
        color: 'orange',
        fillColor: '#ffa726',
        fillOpacity: 0.6,
        radius: load * 10 // Ajuster ce facteur selon les besoins
      }).addTo(this.map);

      circle.bindPopup(`<strong>${region.name}</strong><br>Conso : ${load} MW`);
    });
  }
}
