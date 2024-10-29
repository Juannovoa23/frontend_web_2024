import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Constant } from '../../conststnt';
import { FavoritosComponent } from '../favoritos/favoritos.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, FavoritosComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Asegúrate de que sea styleUrls, no styleUrl
})
export class DashboardComponent implements OnInit {
  http = inject(HttpClient);
  userList: any[] = [];
  decryptedName: string = '';
  dropdownOpen: boolean = false; // Propiedad para controlar el estado del menú desplegable

  ngOnInit(): void {
    this.getAllUser();

    // Desencriptar el nombre de usuario almacenado
    const uName = localStorage.getItem('uName');
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
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe((res: any) => {
      this.userList = res.data;
    });
  }

  // Método para alternar el estado del menú desplegable
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen; // Alterna entre mostrar y ocultar el menú
  }

  // Métodos para mostrar y ocultar el menú (opcional)
  showDropdown() {
    this.dropdownOpen = true;
  }

  hideDropdown() {
    this.dropdownOpen = false;
  }
}
