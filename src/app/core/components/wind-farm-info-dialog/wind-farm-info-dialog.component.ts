import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BarChartModel, WFPopupModel } from '../../models/wind-farm.model';
import { WindFarmDataService } from '../../services/wind-farm-data.service';

@Component({
  selector: 'app-wind-farm-info-dialog',
  templateUrl: './wind-farm-info-dialog.component.html',
  styleUrls: ['./wind-farm-info-dialog.component.scss']
})
export class WindFarmInfoDialogComponent {
  public chartData: BarChartModel;

  constructor(
    private wfDataService: WindFarmDataService,
    @Inject(MAT_DIALOG_DATA) public data: WFPopupModel
  ) {
    this.chartData = this.wfDataService.getChartForSpecificDate(data.wf);
  }
}
