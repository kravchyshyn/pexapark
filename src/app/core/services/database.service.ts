import {Injectable} from '@angular/core';
import { WindFarmModel } from '../models/wind-farm.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor() {}

  /**
   * Get wind farm structure for specific date range and specific wind farm
   * @param windFarmName - name of wind farm (from a list)
   * @param dateRange - period of time for which data is getting
   * @param maxCapacity - max capacity of current wind power plant
   */
  getWFData(windFarmName, dateRange: any, maxCapacity): WindFarmModel {
    let dataStructure: WindFarmModel = {
      name: windFarmName,
      maxCapacity: maxCapacity,
      dateStart: dateRange.start,
      dateEnd: dateRange.end,
      powerData: []
    }
    let date: Date = new Date(dateRange.start);

    while (date <= new Date(dateRange.end)) {
      const powerValues: number[] = this.getDayPowerValues(maxCapacity, 24);
      const basedOn: number= powerValues.length || 0;
      const totalPower: number = powerValues.reduce((prevValue, currentValue) => prevValue + currentValue)
      const averagePower: number = roundTo(totalPower / basedOn, 2)
      const efficiency: number = roundTo(totalPower / (basedOn * maxCapacity), 2);

      dataStructure.powerData.push({date, averagePower, basedOn, efficiency, powerValues})

      let newDate = date.setDate(date.getDate() + 1);
      date = new Date(newDate);
    }

    return dataStructure;
  }

  /**
   * Generate {count} of wind farm power values
   * @param maxCapacity - max power capacity of wind farm
   * @param count - number of values which is needed to generate
   */
  getDayPowerValues(maxCapacity = 10, count = 24): number[] {
    let response: number[] = [];

    for (let i = 0; i < count; i++) {
      const powerValue = roundTo(Math.random() * maxCapacity, 2)
      response.push(powerValue);
    }

    return response;
  }
}

/**
 * Function helper
 * Used to round value for specific accuracy
 * @param value - value which is needed to round
 * @param num - number of digits after "."
 */
function roundTo(value: number, num: number): number {
  return +(Math.round(+(value + "e+" + num)) + "e-" + num);
}
