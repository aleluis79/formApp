import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


export interface Pais {
  id: Number;
  descripcion: string;
}

export interface Provincia {
  id: Number;
  paisId: Number;
  descripcion: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {

  }

  paises = [
    { id: 1, descripcion: 'argentina'},
    { id: 2, descripcion: 'brasil'},
    { id: 3, descripcion: 'uruguay'},
  ];

  provincias: Provincia[] = [];

  texto = '';

  ubicacionForm = this.fb.group({
    pais: ['', Validators.required],
    provincia: ['', Validators.required]
  });

  cambiarPais() {
    if (this.ubicacionForm.controls['pais'].value === '1') {
      this.provincias = [{ id: 1, paisId: 1, descripcion: 'bs as'}];
    } else if (this.ubicacionForm.controls['pais'].value === '2') {
      this.provincias = [{ id: 1, paisId: 2, descripcion: 'rio'}];
    } else if (this.ubicacionForm.controls['pais'].value === '3') {
      this.provincias = [{ id: 1, paisId: 3, descripcion: 'montevideo'}];
    } else {
      this.provincias = [];
      this.ubicacionForm.controls['provincia'].setValue('');
    }
    this.texto = `Seleccionó:  ${this.ubicacionForm.controls['pais'].value} - ${this.ubicacionForm.controls['provincia'].value} `;
  }

  cambiarProvincia() {
    this.texto = `Seleccionó:  ${this.ubicacionForm.controls['pais'].value} - ${this.ubicacionForm.controls['provincia'].value} `;
  }
}
