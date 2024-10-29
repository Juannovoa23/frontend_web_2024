import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  standalone: true,
  imports: [FormsModule] // Importa FormsModule aquí

})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  userType: string = '';

  onSubmit() {
    if (this.password === this.confirmPassword) {
      console.log("Datos del formulario:", {
        username: this.username,
        email: this.email,
        password: this.password,
        userType: this.userType
      });
      alert("Registro exitoso!");
    } else {
      alert("Las contraseñas no coinciden.");
    }
  }
}
