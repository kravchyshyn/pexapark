import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../core/services/database.service';
import { BarChartModel, WindFarmModel, WindFarmSelectorModel } from '../core/models/wind-farm.model';
import { WindFarmDataService } from '../core/services/wind-farm-data.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { WindFarmInfoDialogComponent } from '../core/components/wind-farm-info-dialog/wind-farm-info-dialog.component';

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
    public wfDataService: WindFarmDataService,
    public dialog: MatDialog
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

  onClickOnChartRow(event): void {
    if (event.length > 0) {
      const index = event[0]._index;
      const wfPowerData = this.windFarm.powerData[index];

      if (wfPowerData.basedOn < 24) {
        this.dialog.open(WindFarmInfoDialogComponent, {
          data: {
            wf: wfPowerData,
            headerText: 'Warning',
            mainText: `For this day there are no full data. Wind farm efficiency calculated based on ${wfPowerData.basedOn} of 24 values`
          }
        });
      } else {
        this.dialog.open(WindFarmInfoDialogComponent, {
          data: {
            wf: wfPowerData,
            headerText: 'Info',
            mainText: `Hourly Wind farm efficiency. Depends on wind speed, max power capacity and current wind farm power`
          }
        });
      }
    }
  }

  onTableRowClick(powerDataRow): void {
    if (powerDataRow.basedOn < 24) {
      this.dialog.open(WindFarmInfoDialogComponent, {
        data: {
          wf: powerDataRow,
          headerText: 'Warning',
          mainText: `For this day there are no full data. Wind farm efficiency calculated based on ${powerDataRow.basedOn} of 24 values`
        }
      });
    } else {
      this.dialog.open(WindFarmInfoDialogComponent, {
        data: {
          wf: powerDataRow,
          headerText: 'Info',
          mainText: `Hourly Wind farm efficiency. Depends on wind speed, max power capacity and current wind farm power`
        }
      });
    }
  }
}
