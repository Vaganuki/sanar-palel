import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {CommonModule, isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-energy-map',
  imports: [CommonModule,
    BaseChartDirective
  ],
  templateUrl: './energy-map.component.html',
  styleUrl: './energy-map.component.scss'
})
export class EnergyMapComponent implements OnInit {
  regions = [
    { id: 1, name: 'Flanders' },
    { id: 2, name: 'Liège' },
    { id: 3, name: 'Namur' },
    { id: 4, name: 'Belgium' },
    { id: 5, name: 'Limburg' },
    { id: 6, name: 'Hainaut' },
    { id: 7, name: 'West-Flanders' },
    { id: 8, name: 'Flemish-Brabant' },
    { id: 9, name: 'Brussels' },
    { id: 10, name: 'Antwerp' },
    { id: 11, name: 'Walloon-Brabant' },
    { id: 12, name: 'Luxembourg' },
    { id: 13, name: 'Wallonia' },
    { id: 14, name: 'East-Flanders' }
  ];

  isBrowser = false;
  data: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };
  options: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: any) {}
  selectedRegionId: number = 4;

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.fetchData(this.regions[this.selectedRegionId].name);
    }
  }
  selectRegion(regionId: number): void {
    this.selectedRegionId = regionId;
    // Mettez à jour les données du graphique en fonction de la région sélectionnée
    this.fetchData(this.regions[this.selectedRegionId].name);
  }
  fetchData(region: string): void {
    this.http.get<any[]>(`https://hackathon-helmo-2025-a0e46b409def.herokuapp.com/data/${region}`)
      .subscribe(response => {
        response.sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime());
        const labels = response.map(entry => new Date(entry.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        const measured = response.map(entry => entry.measured);
        const forecast = response.map(entry => entry.day_ahead_forecast);
        const confidence10 = response.map(entry => entry.day_ahead_confidence_10);
        const confidence90 = response.map(entry => entry.day_ahead_confidence_90);

        this.data = {
          labels,
          datasets: [
            {
              label: 'Mesuré',
              data: measured,
              backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
              label: 'Prévision',
              data: forecast,
              backgroundColor: 'rgba(54, 162, 235, 0.5)'
            },
            {
              label: 'Confiance 10%',
              data: confidence10,
              backgroundColor: 'rgba(75, 192, 192, 0.5)'
            },
            {
              label: 'Confiance 90%',
              data: confidence90,
              backgroundColor: 'rgba(153, 102, 255, 0.5)'
            }
          ]
        };
      });
  }
}
