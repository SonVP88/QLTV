import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsTLoai } from './ds-t-loai';

describe('DsTLoai', () => {
  let component: DsTLoai;
  let fixture: ComponentFixture<DsTLoai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsTLoai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsTLoai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
