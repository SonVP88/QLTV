import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLoai } from './the-loai';

describe('TheLoai', () => {
  let component: TheLoai;
  let fixture: ComponentFixture<TheLoai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheLoai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheLoai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
