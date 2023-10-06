import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizonComponent } from './horizon.component';

describe('HorizonComponent', () => {
  let component: HorizonComponent;
  let fixture: ComponentFixture<HorizonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizonComponent]
    });
    fixture = TestBed.createComponent(HorizonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
