import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestacadosService } from '../../Services/destacados.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./../main.component.css'],
})
export class DetailComponent implements OnInit {
  public dataItem: any;
  public id: number;
  public description: boolean;

  constructor(
    private route: ActivatedRoute,
    private destacados: DestacadosService
  ) {
    this.id = 0;
    this.description = true;
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.id = this.route.snapshot.params['id'];
    this.dataItem = this.destacados.getOneById(+this.id);
  }

  changeComponent() {
    this.description = !this.description;
  }
}
