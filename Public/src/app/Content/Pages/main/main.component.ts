import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../Services/categorias.service';
import { DestacadosService } from '../../Services/destacados.service';
import { ProyectsService } from '../../Services/proyects.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./../main.component.css'],
})
export class PrincipalComponent implements OnInit {
  public Arte: any;
  public LibComics: any;
  public Cine: any;
  public Comida: any;
  public Juegos: any;
  public Musica: any;

  public categorias;

  constructor(
    private categoriaService: CategoriasService,
    private proyects: ProyectsService
  ) {
    this.categorias = this.categoriaService.categorias;
    this.Arte = [];
    this.LibComics = [];
    this.Cine = [];
    this.Comida = [];
    this.Juegos = [];
    this.Musica = [];
  }

  async ngOnInit() {
    document.title = 'IdeasBox | Inicio';
    this.Arte = await this.proyects.getBestsByCategory('Arte');
    this.LibComics = await this.proyects.getBestsByCategory('Libros-Comics');
    this.Cine = await this.proyects.getBestsByCategory('Cine');
    this.Juegos = await this.proyects.getBestsByCategory('Juegos');
    this.Musica = await this.proyects.getBestsByCategory('Musica');
    this.Comida = await this.proyects.getBestsByCategory('Comida');
  }
}
