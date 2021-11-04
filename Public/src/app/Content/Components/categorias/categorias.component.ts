import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  @Input() dataCategoria: { title: string };

  constructor() {
    this.dataCategoria = { title: '' };
  }

  ngOnInit(): void {}
}
