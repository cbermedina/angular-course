import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgStyleComponent } from './example-ng-style.component';

describe('ExampleNgStyleComponent', () => {
  let component: ExampleNgStyleComponent;
  let fixture: ComponentFixture<ExampleNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNgStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
