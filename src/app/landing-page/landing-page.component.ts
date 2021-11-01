import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../core/services/database.service';
import { BarChartModel, WindFarmModel, WindFarmSelectorModel } from '../core/models/wind-farm.model';
import { WindFarmDataService } from '../core/services/wind-farm-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  windForm: FormGroup;
  dateRange: FormGroup;
  windFarm: WindFarmModel;
  selectedWF: number = 0;

  windFarms: WindFarmSelectorModel[] = [
    {value: 0, title: 'WF-1', capacity: 10},
    {value: 1, title: 'WF-2', capacity: 17},
    {value: 2, title: 'WF-3', capacity: 22},
    {value: 2, title: 'WF-4', capacity: 15},
  ];

  displayedColumns: string[] = ['position', 'date', 'averagePower', 'efficiency'];
  chartData: BarChartModel;

  wfStructure$: Observable<WindFarmModel>;

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
      windFarmName: [0, [Validators.required]],
      dateRange: this.dateRange
    });
  }

  submit(): void {
    if (!this.windForm.valid) {
      return;
    }

    this.db.getWFData(
      this.windFarms[this.windForm.value.windFarmName].title,
      this.windForm.value.dateRange,
      this.windFarms[this.windForm.value.windFarmName].capacity
    );

    this.wfStructure$ = this.db.getWFData(
      this.windFarms[this.windForm.value.windFarmName].title,
      this.windForm.value.dateRange,
      this.windFarms[this.windForm.value.windFarmName].capacity
    );

    this.wfStructure$.subscribe((response: WindFarmModel) => {
      this.windFarm = response;
      }
    )

    this.chartData = this.wfDataService.getChartStructure(this.windFarm)
  }
}
