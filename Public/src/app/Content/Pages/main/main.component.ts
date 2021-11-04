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
  public destacados;

  constructor(
    private destacadosService: DestacadosService,
    private categoriaService: CategoriasService,
    private proyects: ProyectsService
  ) {
    this.destacados = this.destacadosService.destacadosTotal;
    this.categorias = this.categoriaService.categorias;
    this.Arte = [];
    this.LibComics = [];
    this.Cine = [];
    this.Comida = [];
    this.Juegos = [];
    this.Musica = [];
  }

  async ngOnInit() {
    this.Arte = this.destacados.filter((item) => item.categoria === 'Arte');
    this.LibComics = this.destacados.filter(
      (item) => item.categoria === 'LibrosComics'
    );
    this.Cine = this.destacados.filter((item) => item.categoria === 'Cine');
    this.Comida = this.destacados.filter((item) => item.categoria === 'Comida');
    this.Juegos = this.destacados.filter((item) => item.categoria === 'Juegos');
    this.Musica = this.destacados.filter((item) => item.categoria === 'Musica');
  }
}
