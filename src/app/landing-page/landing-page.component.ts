import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DatabaseService} from '../core/services/database.service';

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

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  windForm: FormGroup;
  dateRange: FormGroup;


  windFarms: WindFarmSelector[] = [
    {value: '0', title: 'WF-1'},
    {value: '1', title: 'WF-2'},
    {value: '2', title: 'WF-3'}
  ];

  displayedColumns: string[] = ['Date', 'Average Power', 'Efficiency Coefficient'];
  // dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  // range = new FormGroup({
  //   start: new FormControl(),
  //   end: new FormControl()
  // });

  constructor(
    public db: DatabaseService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.dateRange = this.fb.group({
      start: new FormControl([null]),
      end:  new FormControl([null]),
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
    console.log(this.windForm.value);

    // let range: any = { "start": "2021-10-06T21:00:00.000Z", "end": "2021-10-20T21:00:00.000Z" };
    let capacity: number = 10;
    const response = this.db.getWFData('WF-1', this.windForm.value.dateRange, capacity);
    console.log('response', response)
  }

}
