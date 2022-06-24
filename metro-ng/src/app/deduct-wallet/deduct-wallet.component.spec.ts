import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductWalletComponent } from './deduct-wallet.component';

describe('DeductWalletComponent', () => {
  let component: DeductWalletComponent;
  let fixture: ComponentFixture<DeductWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeductWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
