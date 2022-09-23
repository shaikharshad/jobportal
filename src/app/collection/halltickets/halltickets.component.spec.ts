import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallticketsComponent } from './halltickets.component';

describe('HallticketsComponent', () => {
  let component: HallticketsComponent;
  let fixture: ComponentFixture<HallticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallticketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HallticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
