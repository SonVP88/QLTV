import { Component,OnInit } from '@angular/core';
import { Shared } from '../../shared';

@Component({
  selector: 'app-ds-sach',
  standalone: false,
  templateUrl: './ds-sach.html',
  styleUrl: './ds-sach.css'
})
export class DsSach implements OnInit {
  constructor(public service: Shared) { }
  ngOnInit(): void {
    this.taiDsSach();
  }
  DsSach: any[] = [];     
  tSach: any;          
  dangThemSua: boolean = false;
  tieuDe: string = '';
  taiDsSach() {
    this.service.layDsSach().subscribe(data => {
      this.DsSach = data;
    });
  }
  chiTietSach(sach: any) {
    this.tSach = sach;
    this.dangThemSua = true;
    this.tieuDe = "Sửa Sách";
    console.log(this.tSach);
  }
  dong() {
    this.dangThemSua = false;
    this.taiDsSach();
  }
  xoaSach(sach: any) {
    if (confirm('Bạn có chắc chắn muốn xóa sách "' + sach.TenSach + '" ?')) {
      this.service.xoaSach(sach.MaSach).subscribe(data => {
        alert(data.toString());
        this.taiDsSach();
      });
    }
  }
  themSach() {
    this.tSach = {
      MaSach: 0,
      TenSach: "",
      MaTheLoai: 0,
      TacGia: "",
      Gia: 0
    };
    this.dangThemSua = true;
    this.tieuDe = "Thêm Sách";
  }
}
