import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register-page.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule] // Importa FormsModule para que ngModel funcione
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title "Registro"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Registro');
  });

  it('should have input fields for username, email, password, confirmPassword, and userType', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // Verifica que existan los campos de entrada
    expect(compiled.querySelector('input[name="username"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="email"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="password"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="confirmPassword"]')).toBeTruthy();
    expect(compiled.querySelector('select[name="userType"]')).toBeTruthy();
  });

  it('should display an error message if passwords do not match', () => {
    component.password = 'password123';
    component.confirmPassword = 'differentPassword';
    component.onSubmit();
    fixture.detectChanges();

    spyOn(window, 'alert');
    expect(window.alert).toHaveBeenCalledWith('Las contraseñas no coinciden.');
  });

  it('should show a success message if the form is submitted correctly', () => {
    component.username = 'testuser';
    component.email = 'test@example.com';
    component.password = 'password123';
    component.confirmPassword = 'password123';
    component.userType = 'arrendador';
    spyOn(window, 'alert');

    component.onSubmit();
    fixture.detectChanges();

    expect(window.alert).toHaveBeenCalledWith('Registro exitoso!');
  });
});
