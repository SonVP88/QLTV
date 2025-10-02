import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsSach } from './ds-sach';

describe('DsSach', () => {
  let component: DsSach;
  let fixture: ComponentFixture<DsSach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsSach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsSach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
