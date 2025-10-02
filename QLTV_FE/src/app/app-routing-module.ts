import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsSach } from './sach/ds-sach/ds-sach';
import { DsTLoai } from './the-loai/ds-t-loai/ds-t-loai';
import { ThemSuaSach } from './sach/them-sua-sach/them-sua-sach';
import { ThemSuaTLoai } from './the-loai/them-sua-t-loai/them-sua-t-loai';
import { NguoiDung } from './nguoi-dung/nguoi-dung';

const routes: Routes = [
  { path: '', component: DsTLoai },
  {path:'the-loai', component: DsTLoai},
  {path:'sach', component: DsSach},
  {path:'them-sua-sach', component: ThemSuaSach},
  {path:'them-sua-t-loai', component: ThemSuaTLoai},
  {path:'dangnhap', component: NguoiDung}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
