import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfMoneyOperationsComponent } from './self-money-operations.component';

describe('SelfMoneyOperationsComponent', () => {
  let component: SelfMoneyOperationsComponent;
  let fixture: ComponentFixture<SelfMoneyOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfMoneyOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfMoneyOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
