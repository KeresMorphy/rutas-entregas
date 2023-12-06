// pruebas.page.ts
import { Component, OnInit } from '@angular/core';
import { FolioService } from '../services/folio.service';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage implements OnInit {
  folioHeader: any; // Declara una propiedad para almacenar la información del folio

  constructor(private folioService: FolioService) {}

  ngOnInit() {
    const folioId = 1;

    this.folioService.getFolioHeaderById(folioId).subscribe(
      (folioHeader) => {
        this.folioHeader = folioHeader; // Asigna la respuesta del servicio a la propiedad
      },
      (error) => {
        console.error('Error al obtener el folio header:', error);
      }
    );
  }
}
