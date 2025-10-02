import { Component,OnInit ,Input } from '@angular/core';
import { Shared } from '../../shared';

@Component({
  selector: 'app-them-sua-t-loai',
  standalone: false,
  templateUrl: './them-sua-t-loai.html',
  styleUrl: './them-sua-t-loai.css'
})
export class ThemSuaTLoai implements OnInit {
  tenTheLoai: any;
  @Input() tLoai:any;
  maTheLoai:any;
  

  constructor(private service: Shared) { }
  ngOnInit(): void {
    this.tenTheLoai=this.tLoai.TenTheLoai;
    this.maTheLoai=this.tLoai.MaTheLoai;
    console.log(this.maTheLoai);
  }
  themTheLoai() {
    var val = {
      tenTheLoai: this.tenTheLoai
    };
    this.service.themTheLoai(val).subscribe(res => {
      alert(res.toString());
    });
  }
  
  
  suaTheLoai() {
    var val = {
      maTheLoai:this.maTheLoai,
      tenTheLoai: this.tenTheLoai
    };
     this.service.suaTheLoai(val).subscribe(res => {
      alert(res.toString());
    });
    
}
}
