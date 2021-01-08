import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleHiddenPropertyComponent } from './example-hidden-property.component';

describe('ExampleHiddenPropertyComponent', () => {
  let component: ExampleHiddenPropertyComponent;
  let fixture: ComponentFixture<ExampleHiddenPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleHiddenPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleHiddenPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
