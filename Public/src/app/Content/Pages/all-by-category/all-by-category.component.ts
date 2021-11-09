import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectsService } from '../../Services/proyects.service';

@Component({
  selector: 'app-all-by-category',
  templateUrl: './all-by-category.component.html',
  styleUrls: ['./all-by-category.component.css', './../main.component.css'],
})
export class AllByCategoryComponent implements OnInit {
  proyectos: [];

  constructor(
    private route: ActivatedRoute,
    private proyects: ProyectsService
  ) {
    this.proyectos = [];
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.route.url.subscribe(async (url) => {
      this.proyectos = await this.proyects.getAllByCategory(url[1].path);
    });
  }
}
