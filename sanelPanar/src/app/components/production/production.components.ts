import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
import {FormsModule} from '@angular/forms';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  imports: [
    FormsModule,
    BaseChartDirective
  ],
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {
  regions: string[] = ['Belgium', 'Brussels', 'Wallonia', 'Flanders'];
  selectedRegion = 'Belgium';

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  };

  chartData: ChartData<'line'> = {
    labels: [],
    datasets: []
  };

  constructor() {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const productionByRegion: { [key: string]: number[] } = {
      'Belgium': [3200, 2800, 4100, 4500, 5100, 5200, 5000, 4800, 4000, 3600, 3300, 3000],
      'Flanders': [1700, 1500, 2200, 2500, 2900, 3000, 2950, 2850, 2400, 2100, 1800, 1600],
      'Wallonia': [1100, 1000, 1400, 1600, 1800, 2000, 1950, 1900, 1600, 1400, 1200, 1100],
      'Brussels': [400, 300, 450, 500, 550, 600, 580, 560, 500, 450, 400, 350],
    };

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const selectedData = productionByRegion[this.selectedRegion];

    this.chartData = {
      labels,
      datasets: [
        {
          label: `Estimated Monthly Solar Production in ${this.selectedRegion} (MWh)`,
          data: selectedData,
          borderColor: 'orange',
          backgroundColor: 'rgba(255, 165, 0, 0.2)',
          tension: 0.3,
          fill: true,
          pointRadius: 4
        }
      ]
    };
  }

  refreshChart(): void {
    this.fetchData();
  }
}
