import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCustomDirectivesComponent } from './example-custom-directives.component';

describe('ExampleCustomDirectivesComponent', () => {
  let component: ExampleCustomDirectivesComponent;
  let fixture: ComponentFixture<ExampleCustomDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleCustomDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCustomDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
