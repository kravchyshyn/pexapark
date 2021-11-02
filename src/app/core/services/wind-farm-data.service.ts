import { Injectable } from '@angular/core';
import { BarChartModel, PowerDataModel, WindFarmModel } from '../models/wind-farm.model';

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

    const response: BarChartModel = {
      barChartLabels: [],
      barChartData: [{
        data: [],
        label: 'Daily wind farm efficiency for specific data range',
        backgroundColor: []
      }]
    };

    wfStructure.powerData.forEach(el => {
      const date: Date = new Date(el.date);
      const color: string = el.basedOn == 24 ? chartColors.blue : chartColors.red;

      response.barChartData[0].data.push(el.efficiency);
      (response.barChartData[0].backgroundColor as Array<string>).push(color);
      response.barChartLabels.push(date.toISOString().slice(0, 10));
    })

    return response;
  }

  /**
   * Prepare hourly data for bar chart for a specific date
   * @param data - all data for specific wind farm used for specific date
   */
  getChartForSpecificDate(data: PowerDataModel): BarChartModel {
    const response: BarChartModel = {
      barChartLabels: [],
      barChartData: [{
        data: [],
        label: 'Hourly wind farm efficiency for specific date',
        backgroundColor: []
      }]
    };

    data.powerValues.forEach((el, index) => {
      response.barChartData[0].data.push(el / data.maxPower);
      (response.barChartData[0].backgroundColor as Array<string>).push('rgb(54, 162, 235)');
      response.barChartLabels.push(index.toString());
    })

    return response;
  }
}
