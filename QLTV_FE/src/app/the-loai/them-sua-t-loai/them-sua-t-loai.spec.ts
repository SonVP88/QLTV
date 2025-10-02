import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaTLoai } from './them-sua-t-loai';

describe('ThemSuaTLoai', () => {
  let component: ThemSuaTLoai;
  let fixture: ComponentFixture<ThemSuaTLoai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuaTLoai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaTLoai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
