import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindFarmInfoDialogComponent } from './wind-farm-info-dialog.component';

describe('WindFarmInfoDialogComponent', () => {
  let component: WindFarmInfoDialogComponent;
  let fixture: ComponentFixture<WindFarmInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindFarmInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindFarmInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
