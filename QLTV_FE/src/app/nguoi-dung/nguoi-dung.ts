import { Component, OnInit } from '@angular/core';
import { Shared } from '../shared';

@Component({
  selector: 'app-nguoi-dung',
  standalone: false,
  templateUrl: './nguoi-dung.html',
  styleUrl: './nguoi-dung.css'
})
export class NguoiDung implements OnInit {
  constructor(private service: Shared) { }

  tenDangNhap: any;
  matKhau: any;
  table: any = [];
  nguoiDung: any = {
    tenDangNhap: 'user',
    matKhau: '123',
    hoVaten: '',
  }
  ngOnInit(): void {


  }


  dangNhap() {
    this.nguoiDung.tenDangNhap = this.tenDangNhap;
    this.nguoiDung.matKhau = this.matKhau;


    this.service.dangNhap(this.nguoiDung).subscribe({

      next: (data: any) => {
        this.table = data;


        if (this.table && this.table.length > 0 && this.table[0].Column1 == 1) {
          alert("Đăng nhập thành công");
          window.location.href = "http://localhost:4200/sach";
        } else {

          alert("Đăng nhập thất bại: Thông tin trả về không khớp.");
        }
      },

      error: (err) => {

        console.error('Lỗi Đăng nhập API:', err);
        alert("Đăng nhập thất bại: Vui lòng kiểm tra Tên Đăng Nhập và Mật Khẩu.");
      }
    });
  }
}
