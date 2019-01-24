import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterIdentificationComponent } from './printer-identification.component';

describe('PrinterIdentificationComponent', () => {
  let component: PrinterIdentificationComponent;
  let fixture: ComponentFixture<PrinterIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
