import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingInvalidInputFieldsComponent } from './styling-invalid-input-fields.component';

describe('StylingInvalidInputFieldsComponent', () => {
  let component: StylingInvalidInputFieldsComponent;
  let fixture: ComponentFixture<StylingInvalidInputFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylingInvalidInputFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingInvalidInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
