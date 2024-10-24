import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Constant } from '../../conststnt';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  http = inject(HttpClient);
  userList: any[] = [];
  decryptedName: string = '';

  ngOnInit(): void {
    this.getAllUser();

    // Desencriptar el nombre de usuario almacenado
    const uName = localStorage.getItem('uName');
    debugger;
    if (uName != null) {
      this.decryptedName = this.decryptData(uName);
    }
  }

  // Método para desencriptar datos
  decryptData(data: string) {
    const decryptedVal = CryptoJS.AES.decrypt(data, Constant.EN_KEY);
    return decryptedVal.toString(CryptoJS.enc.Utf8);
  }

  // Obtener todos los usuarios
  getAllUser() {
    debugger;
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe((res: any) => {
      this.userList = res.data;
    });
  }
}
