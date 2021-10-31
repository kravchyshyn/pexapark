import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { BarChartModel } from '../../models/wind-farm.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  @Input() data: BarChartModel;

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 1,
          min: 0,
          beginAtZero: true
        }
      }]
    }
  };
  barChartType: ChartType = 'bar';
  barChartLegend: boolean = false;

  constructor() {
  }
}
