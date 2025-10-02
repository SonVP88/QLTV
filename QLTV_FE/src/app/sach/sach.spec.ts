import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sach } from './sach';

describe('Sach', () => {
  let component: Sach;
  let fixture: ComponentFixture<Sach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
