import { Injectable } from '@angular/core';
import { BarChartModel, WindFarmModel } from '../models/wind-farm.model';

@Injectable({
  providedIn: 'root'
})
export class WindFarmDataService {
  constructor() {}

  /**
   * Prepare data for bar chart
   * @param wfStructure - wind farm data structure
   */
  getChartStructure(wfStructure: WindFarmModel): BarChartModel {
    const chartColors = {
      red: 'rgb(255, 99, 132)',
      blue: 'rgb(54, 162, 235)'
    };

    let response: BarChartModel = {
      barChartLabels: [],
      barChartData: [{
        data: [],
        label: '',
        backgroundColor: []
      }]
    };

    wfStructure.powerData.forEach(el => {
      const date: Date = new Date(el.date);
      console.log('el.basedOn', el);
      const color: string = el.basedOn == 24 ? chartColors.blue : chartColors.red;

      response.barChartData[0].data.push(el.efficiency);
      (response.barChartData[0].backgroundColor as Array<string>).push(color);
      response.barChartLabels.push(date.toISOString().slice(0, 10));
    })

    return response;
  }
}
