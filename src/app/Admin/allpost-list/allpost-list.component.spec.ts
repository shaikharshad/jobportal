import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpostListComponent } from './allpost-list.component';

describe('AllpostListComponent', () => {
  let component: AllpostListComponent;
  let fixture: ComponentFixture<AllpostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
