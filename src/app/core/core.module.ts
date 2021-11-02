import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { WindFarmInfoDialogComponent } from './components/wind-farm-info-dialog/wind-farm-info-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [BarChartComponent, WindFarmInfoDialogComponent],
  exports: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule
  ]
})
export class CoreModule {
}
