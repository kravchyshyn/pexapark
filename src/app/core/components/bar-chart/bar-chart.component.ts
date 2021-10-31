import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() data: any;

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max : 1,
          min: 0,
          beginAtZero: true
        }
      }]
    }
  };
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  constructor() {}

  ngOnInit(): void {
    console.log('this.data', this.data);
  }

}
