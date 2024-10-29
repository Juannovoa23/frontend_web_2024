import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import * as CryptoJS from 'crypto-js';
import { Constant } from '../../../conststnt';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  http = inject(HttpClient);
  userList: any[] = [];
  decryptedName: string = '';
  dropdownOpen: boolean = false;
  fincaList: any[] = [];
fincas: any;

  // Inyecta el servicio y el router
  constructor(private readonly router: Router, ) {}

  ngOnInit(): void {
    this.getAllUser();

    const uName = localStorage.getItem('uName');
    if (uName != null) {
      this.decryptedName = this.decryptData(uName);
    }
  }

  decryptData(data: string) {
    const decryptedVal = CryptoJS.AES.decrypt(data, Constant.EN_KEY);
    return decryptedVal.toString(CryptoJS.enc.Utf8);
  }

  getAllUser() {
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe((res: any) => {
      this.userList = res.data;
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  showDropdown() {
    this.dropdownOpen = true;
  }


  hideDropdown() {
    this.dropdownOpen = false;
  }

  redirigirReserva(finca: any): void {
    // Lógica de redirección usando el nombre de la finca (puedes cambiar según necesites)
    this.router.navigate(['/reserva'], { queryParams: { finca: finca.nombre } });
  }


  // Método para reservar una finca

}
