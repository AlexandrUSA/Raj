import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDetailsControlsComponent } from './cake-details-controls.component';

describe('CakeDetailsControlsComponent', () => {
  let component: CakeDetailsControlsComponent;
  let fixture: ComponentFixture<CakeDetailsControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeDetailsControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeDetailsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
