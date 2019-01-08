import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListAllComponent } from './transaction-list-all.component';

describe('TransactionListAllComponent', () => {
  let component: TransactionListAllComponent;
  let fixture: ComponentFixture<TransactionListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
