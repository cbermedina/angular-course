import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgifComponent } from './example-ngif.component';

describe('ExampleNgifComponent', () => {
  let component: ExampleNgifComponent;
  let fixture: ComponentFixture<ExampleNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
