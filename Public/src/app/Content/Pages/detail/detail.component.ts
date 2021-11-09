import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestacadosService } from '../../Services/destacados.service';
import { ProyectsService } from '../../Services/proyects.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./../main.component.css', './detail.component.css'],
})
export class DetailComponent implements OnInit {
  public id: number;
  public description: boolean;
  public dataItem: any;

  constructor(
    private route: ActivatedRoute,
    private proyects: ProyectsService
  ) {
    this.id = 0;
    this.description = true;
    this.dataItem = {};
  }

  async ngOnInit() {
    document.title = 'IdeasBox | Detalle';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.id = this.route.snapshot.params['id'];

    this.dataItem = await this.proyects.getOneByID(this.id);
  }

  changeComponent() {
    this.description = !this.description;
  }

  async voteLike() {
    await this.proyects.voteUp(this.id);
    Swal.fire('Gracias', 'Su voto ya fue procesado', 'info');
  }

  async voteDislike() {
    await this.proyects.voteDown(this.id);
    Swal.fire('Gracias', 'Su voto ya fue procesado', 'info');
  }
}
