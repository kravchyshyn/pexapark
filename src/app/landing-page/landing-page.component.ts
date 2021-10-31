import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../core/services/database.service';
import { PeriodicElement, WindFarmModel, WindFarmSelectorModel } from '../core/models/wind-farm.model';
import { WindFarmDataService } from '../core/services/wind-farm-data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  windForm: FormGroup;
  dateRange: FormGroup;
  windFarm: WindFarmModel;

  windFarms: WindFarmSelectorModel[] = [
    {value: '0', title: 'WF-1'},
    {value: '1', title: 'WF-2'},
    {value: '2', title: 'WF-3'}
  ];

  displayedColumns: string[] = ['position', 'date', 'averagePower', 'efficiency'];
  // clickedRows = new Set<PeriodicElement>();
  chartData: any;



  constructor(
    private db: DatabaseService,
    private fb: FormBuilder,
    public wfDataService: WindFarmDataService
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

    this.chartData = this.wfDataService.getChartStructure(this.windFarm)

  }
}
