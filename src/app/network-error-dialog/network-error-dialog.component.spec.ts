import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkErrorDialogComponent } from './network-error-dialog.component';

describe('NetworkErrorDialogComponent', () => {
  let component: NetworkErrorDialogComponent;
  let fixture: ComponentFixture<NetworkErrorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkErrorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
