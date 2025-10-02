import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Shared {
  readonly APIUrl = "http://localhost:5227/api";
  readonly PhotoUrl = "http://localhost:5227/Photos/";

  constructor(private http: HttpClient) { }
  layDsTheLoai(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/TheLoai');
  }
  themTheLoai(val:any) {
    return this.http.post<any>(this.APIUrl + '/TheLoai',val);
  }
  suaTheLoai(val:any) {
    return this.http.put<any>(this.APIUrl + '/TheLoai',val);
  }
  xoaTheLoai(val:any) {
    return this.http.delete<any>(`${this.APIUrl}/TheLoai/${val}`);
    
  }
  layDsSach(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Sach');
  }
  suaSach(val:any) {
    return this.http.put<any>(this.APIUrl + '/Sach',val);
  }
  themSach(val:any) {
    return this.http.post<any>(this.APIUrl + '/Sach',val);
  }
  xoaSach(val:any){
    return this.http.delete<any>(`${this.APIUrl}/Sach/${val}`);
  }
  taiAnh(val: FormData) {
  return this.http.post<any>(this.APIUrl + '/Sach/SaveFile', val);
}
  layDsTenTheLoai(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Sach/GetAllTenTheLoai');
  }
  dangNhap(val:any): Observable<any[]> {
    return this.http.post<any>(this.APIUrl + '/NguoiDung',val);
  }
  
}
