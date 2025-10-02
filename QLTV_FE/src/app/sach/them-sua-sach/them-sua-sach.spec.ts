import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaSach } from './them-sua-sach';

describe('ThemSuaSach', () => {
  let component: ThemSuaSach;
  let fixture: ComponentFixture<ThemSuaSach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuaSach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaSach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
