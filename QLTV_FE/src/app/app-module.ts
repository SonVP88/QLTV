import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TheLoai } from './the-loai/the-loai';
import { DsTLoai } from './the-loai/ds-t-loai/ds-t-loai';
import { ThemSuaTLoai } from './the-loai/them-sua-t-loai/them-sua-t-loai';
import { Sach } from './sach/sach';
import { DsSach } from './sach/ds-sach/ds-sach';
import { ThemSuaSach } from './sach/them-sua-sach/them-sua-sach';

import { Shared } from './shared';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NguoiDung } from './nguoi-dung/nguoi-dung';

@NgModule({
  declarations: [
    App,
    TheLoai,
    DsTLoai,
    ThemSuaTLoai,
    Sach,
    DsSach,
    ThemSuaSach,
    NguoiDung
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
