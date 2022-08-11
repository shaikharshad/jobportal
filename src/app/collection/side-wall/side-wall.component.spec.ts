import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideWallComponent } from './side-wall.component';

describe('SideWallComponent', () => {
  let component: SideWallComponent;
  let fixture: ComponentFixture<SideWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideWallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
