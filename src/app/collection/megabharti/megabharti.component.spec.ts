import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegabhartiComponent } from './megabharti.component';

describe('MegabhartiComponent', () => {
  let component: MegabhartiComponent;
  let fixture: ComponentFixture<MegabhartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegabhartiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegabhartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
