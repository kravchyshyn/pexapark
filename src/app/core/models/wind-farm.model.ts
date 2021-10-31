export interface WindFarmSelectorModel {
  value: string;
  title: string;
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

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


