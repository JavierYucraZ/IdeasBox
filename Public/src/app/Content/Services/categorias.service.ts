import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  categorias = [
    { title: 'Arte' },
    { title: 'Libros-Comics' },
    { title: 'Cine' },
    { title: 'Comida' },
    { title: 'Juegos' },
    { title: 'Musica' },
  ];

  constructor() {}
}
