import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor() {}

  /**
   * Get
   * @param windFarmName
   * @param dateRange
   * @param maxCapacity
   */
  getWFData(windFarmName, dateRange: any, maxCapacity) {
    let dataStructure = {
      name: windFarmName,
      maxCapacity: maxCapacity,
      dateStart: dateRange.start,
      dateEnd: dateRange.end,
      powerData: []
    }
    let date = new Date(dateRange.start);

    while (date <= new Date(dateRange.end)) {
      const powerValues = this.getDayPowerValues(maxCapacity, 24);
      const basedOn = powerValues.length || 0;
      const totalPower = powerValues.reduce((prevValue, currentValue) => prevValue + currentValue)
      const averagePower = roundTo(totalPower / basedOn, 2)
      const efficiency = roundTo(totalPower / (basedOn * maxCapacity), 2);

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
  getDayPowerValues(maxCapacity = 10, count = 24) {
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
function roundTo(value: number, num: number) {
  return +(Math.round(+(value + "e+" + num)) + "e-" + num);
}
