import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperWarsBasicComponent } from './super-wars-basic.component';

describe('SuperWarsBasicComponent', () => {
  let component: SuperWarsBasicComponent;
  let fixture: ComponentFixture<SuperWarsBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperWarsBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperWarsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
