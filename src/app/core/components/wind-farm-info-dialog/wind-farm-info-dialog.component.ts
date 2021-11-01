import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PowerDataModel } from '../../models/wind-farm.model';

@Component({
  selector: 'app-wind-farm-info-dialog',
  templateUrl: './wind-farm-info-dialog.component.html',
  styleUrls: ['./wind-farm-info-dialog.component.scss']
})
export class WindFarmInfoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PowerDataModel) {}
}
