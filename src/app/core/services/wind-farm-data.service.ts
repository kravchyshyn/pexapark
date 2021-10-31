import { Injectable } from '@angular/core';
import { WindFarmModel } from '../models/wind-farm.model';
import { ChartDataSets } from 'chart.js';


@Injectable({
  providedIn: 'root'
})
export class WindFarmDataService {
  constructor() {

  }

  getChartStructure(wfStructure: WindFarmModel) {
    var chartColors = {
      red: 'rgb(255, 99, 132)',
      blue: 'rgb(54, 162, 235)'
    };

    //Label[]
    // barChartData: ChartDataSets[];
    let response = {
      barChartLabels: [],
      barChartData: [{
        data: [],
        label: '',
        backgroundColor: []
      }]
    };
    // const efficiencyArr = []
    // const datesArr = []
    // const backgroundArr = [];

    wfStructure.powerData.forEach(el => {
      const date = new Date(el.date);
      const color = el.efficiency > 0.5 ? chartColors.blue : chartColors.red;

      // efficiencyArr.push(el.efficiency)

      response.barChartData[0].data.push(el.efficiency);
      response.barChartData[0].backgroundColor.push(color);
      response.barChartLabels.push(date.toISOString().slice(0, 10));

      // datesArr.push(date.toISOString().slice(0, 10))

      // backgroundArr.push(color)
    })

    // response.barChartLabels = datesArr;
    // response.barChartData = [{
    //   data: efficiencyArr, label: '', backgroundColor: backgroundArr
    // }
    // ];

    console.log('response', response);

    return response;
  }
}
