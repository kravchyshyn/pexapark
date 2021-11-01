import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { WindFarmInfoDialogComponent } from './components/wind-farm-info-dialog/wind-farm-info-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [BarChartComponent, WindFarmInfoDialogComponent],
  exports: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MatDialogModule
  ]
})
export class CoreModule {
}
