import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';
import { Constant } from '../../conststnt';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "EmailId": "",
    "Password": ""
  };

  http = inject(HttpClient);
  router = inject(Router);

  // Método para encriptar datos
  encryptData(data: any) {
    return CryptoJS.AES.encrypt(data, Constant.EN_KEY).toString();
  }
  handleLoginClick() {
    this.onLogin(); // Aquí llamas a la función que ya tienes para manejar el login
  }


  // Método de Login
  onLogin() {
    /*//*debugger;
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert("Login exitoso");

        // Encriptar y guardar nombre de usuario
        const encryptedUserName = this.encryptData(this.loginObj.EmailId);
        localStorage.setItem("uName", encryptedUserName);

        // Guardar el token
        localStorage.setItem('token', res.data.token);
/* //**/
        //Redirigir al dashboard
        this.router.navigate(['/dashboard']);
      /*} else {
        alert(res.message);
      }
    });*/
  }
}
