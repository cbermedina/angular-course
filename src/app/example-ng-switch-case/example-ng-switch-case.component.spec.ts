import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgSwitchCaseComponent } from './example-ng-switch-case.component';

describe('ExampleNgSwitchCaseComponent', () => {
  let component: ExampleNgSwitchCaseComponent;
  let fixture: ComponentFixture<ExampleNgSwitchCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNgSwitchCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNgSwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
