import { Component } from '@angular/core';
import {QRCodeComponent} from 'angularx-qrcode';
import {SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-qrcode',
  imports: [QRCodeComponent],
  templateUrl: './qrcode.html',
  styleUrl: './qrcode.css',
})
export class Qrcode {
  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";

  constructor () {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

}
