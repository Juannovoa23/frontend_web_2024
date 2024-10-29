import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilArrendatarioComponent } from './perfil-arrendatario.component';

describe('PerfilArrendatarioComponent', () => {
  let component: PerfilArrendatarioComponent;
  let fixture: ComponentFixture<PerfilArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilArrendatarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
