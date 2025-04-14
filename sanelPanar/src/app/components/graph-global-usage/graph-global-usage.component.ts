import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {ChartData, ChartOptions} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-graph-global-usage',
  imports: [BaseChartDirective],
  templateUrl: './graph-global-usage.component.html',
  styleUrl: './graph-global-usage.component.scss'
})
export class GraphGlobalUsageComponent {

  isBrowser!: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any){}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  data: ChartData = {
    labels: ["Janvier","Février","Mars","Avril", "Mai"],
    datasets: [{
        data: [1,2,3,4,5,6,7,8,9],
        backgroundColor: "red"
    },
      {
        data: [1,2,3,4,5,6,7,8,9],
        backgroundColor: "blue"
      },
      {
        data: [1,2,3,4,5,6,7,8,9],
        backgroundColor: "lightgreen"
      }]
  };

  options: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
}
