import { Component, Input, OnInit } from '@angular/core';
import { Shared } from '../../shared';

@Component({
  selector: 'app-them-sua-sach',
  standalone: false,
  templateUrl: './them-sua-sach.html',
  styleUrl: './them-sua-sach.css'
})
export class ThemSuaSach implements OnInit {
  @Input() tSach: any;

  maSach: number | null = null;
  tenSach: string = '';
  theLoai: string = ''; 
  tacGia: string = '';
  namXuatBan: number | null = null;
  nhaXuatBan: string = '';
  ngayNhap: string = '';
  anh: string = '';

  duongDanAnh: string = '';

  constructor(private service: Shared) { }

  ngOnInit(): void {
    if (this.tSach) {
      this.maSach = this.tSach.MaSach;
      this.tenSach = this.tSach.TenSach;
      this.theLoai = this.tSach.TheLoai;
      this.tacGia = this.tSach.TacGia;
      this.namXuatBan = this.tSach.NamXuatBan;
      this.nhaXuatBan = this.tSach.NhaXuatBan;

      // xử lý ngày cho input type="date"
      if (this.tSach.NgayNhap) {
        this.ngayNhap = this.tSach.NgayNhap.split('T')[0];
      }

      this.anh = this.tSach.Anh;
      this.duongDanAnh = this.anh ? this.service.PhotoUrl + "/" + this.anh : '';
    }
  }

  themSach() {
    const val = {
      TenSach: this.tenSach,
      TheLoai: this.theLoai,
      TacGia: this.tacGia,
      NamXuatBan: this.namXuatBan,
      NhaXuatBan: this.nhaXuatBan,
      NgayNhap: this.ngayNhap ? this.ngayNhap + "T00:00:00" : null,
      Anh: this.anh
    };
    this.service.themSach(val).subscribe(res => {
      alert(res.toString());
    });
  }

  suaSach() {
    const val = {
      MaSach: this.maSach,
      TenSach: this.tenSach,
      TheLoai: this.theLoai,
      TacGia: this.tacGia,
      NamXuatBan: this.namXuatBan,
      NhaXuatBan: this.nhaXuatBan,
      NgayNhap: this.ngayNhap ? this.ngayNhap + "T00:00:00" : null,
      Anh: this.anh
    };
    this.service.suaSach(val).subscribe(res => {
      alert(res.toString());
    });
  }

uploadAnh(event: any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);

    this.service.taiAnh(formData).subscribe((res: any) => {
      this.anh = res;  // lưu tên file trả về từ API
      this.duongDanAnh = this.service.PhotoUrl + '/' + this.anh; // link preview
    });
  }
}


}
