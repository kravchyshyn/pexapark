import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

export interface WindFarmSelectorModel {
  value: number;
  title: string;
  capacity: number;
}

export interface WindFarmModel {
  name: string;
  powerData: PowerDataModel[];
  maxCapacity: number;
  dateStart: Date;
  dateEnd: Date;
}

export interface PowerDataModel {
  averagePower: number;
  basedOn: number;
  date: Date;
  efficiency: number;
  powerValues: number[]
}

export interface BarChartModel {
  barChartLabels: Label[];
  barChartData: ChartDataSets[];
}
