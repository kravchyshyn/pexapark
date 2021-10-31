import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DatabaseService} from '../core/services/database.service';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

interface WindFarmSelector {
  value: string;
  title: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  windForm: FormGroup;
  dateRange: FormGroup;
  windFarm: any;

  windFarms: WindFarmSelector[] = [
    {value: '0', title: 'WF-1'},
    {value: '1', title: 'WF-2'},
    {value: '2', title: 'WF-3'}
  ];

  displayedColumns: string[] = ['position', 'date', 'averagePower', 'efficiency'];
  clickedRows = new Set<PeriodicElement>();


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[];


  constructor(
    public db: DatabaseService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.dateRange = this.fb.group({
      start: new FormControl([null]),
      end: new FormControl([null]),
    });

    this.windForm = this.fb.group({
      windFarmName: [1, [Validators.required]],
      dateRange: this.dateRange
    });
  }

  submit() {
    if (!this.windForm.valid) {
      return;
    }

    let capacity: number = 10;
    this.windFarm = this.db.getWFData('WF-1', this.windForm.value.dateRange, capacity);
    console.log('windFarm', this.windFarm)

    const efficiencyArr = []
    const datesArr = []
    const backgroundArr = [];

    var chartColors = {
      red: 'rgb(255, 99, 132)',
      blue: 'rgb(54, 162, 235)'
    };

    this.windFarm.powerData.forEach(el => {
      efficiencyArr.push(el.efficiency)

      const date = new Date(el.date);
      datesArr.push(date.toISOString().slice(0, 10))

      const color = el.efficiency > 0.5 ? chartColors.blue: chartColors.red;
      backgroundArr.push(color)
    })


    this.barChartLabels = datesArr;
    this.barChartData = [{
        data: efficiencyArr, label: '', backgroundColor: backgroundArr
      }
    ];

  }
}
