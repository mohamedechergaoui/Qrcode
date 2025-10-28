import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import {Qrcode} from './qrcode/qrcode';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QRCodeComponent, Qrcode],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Qrcode');
}
