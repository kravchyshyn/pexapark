import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../core/services/auth.service';
import { AuthGuard } from '../core/services/auth.guard';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    HttpClientModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard]
})
export class SharedModule { }
