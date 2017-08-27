import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forecast16Component } from './forecast-16.component';

describe('Forecast16Component', () => {
  let component: Forecast16Component;
  let fixture: ComponentFixture<Forecast16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forecast16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forecast16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
