import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCollectionComponent } from './web-collection.component';

describe('WebCollectionComponent', () => {
  let component: WebCollectionComponent;
  let fixture: ComponentFixture<WebCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
