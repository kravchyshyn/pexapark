import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
