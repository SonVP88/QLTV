import { Component, OnInit } from '@angular/core';
import { Shared } from '../../shared';

@Component({
  selector: 'app-ds-t-loai',
  standalone: false,
  templateUrl: './ds-t-loai.html',
  styleUrl: './ds-t-loai.css'
})
export class DsTLoai implements OnInit {
  constructor(private service: Shared) { }
  DsTheLoai: any = [];
  tLoai: any;
  dangThemSua: boolean = false;
  tieuDe:any;
  ngOnInit(): void {
    this.taiDsTheLoai();
  }
  taiDsTheLoai() {
    this.service.layDsTheLoai().subscribe(data => {
      this.DsTheLoai = data;
    });
  }
  chiTietTheLoai(tLoai: any) {   
    this.tLoai = tLoai;
    this.dangThemSua = true;
    this.tieuDe="Sửa Thể Loại";
    console.log(this.tLoai);
  }
  dong() {
    this.dangThemSua = false;
    this.taiDsTheLoai();
  }
  xoaTheLoai(tLoai: any) {
    if (confirm('Bạn có chắc chắn muốn xóa thể loại ' + tLoai.TenTheLoai)) {
      this.service.xoaTheLoai(tLoai.MaTheLoai).subscribe(data => {
        alert(data.toString());
        this.taiDsTheLoai();
      });
    }
  }
  themTheLoai() {
    this.tLoai = {
      MaTheLoai: 0,
      TenTheLoai: ""
    }
    this.dangThemSua = true;
    this.tieuDe="Thêm Thể Loại";
  }
}
