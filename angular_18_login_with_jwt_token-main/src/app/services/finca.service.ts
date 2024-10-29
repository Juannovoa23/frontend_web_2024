import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class FincaService {
  public finca: any;

  setFinca(finca: any) {
    this.finca = finca;
  }
  getFinca() {
    return this.finca;
  }
}


