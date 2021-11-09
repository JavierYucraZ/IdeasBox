import { Component, OnInit } from '@angular/core';
import { ProyectsService } from '../../Services/proyects.service';

@Component({
  selector: 'app-my-proyects',
  templateUrl: './my-proyects.component.html',
  styleUrls: ['./my-proyects.component.css'],
})
export class MyProyectsComponent implements OnInit {
  proyectos: any;

  constructor(private proyects: ProyectsService) {
    this.proyectos = [];
  }

  async ngOnInit() {
    const uid = JSON.parse(localStorage.getItem('uid') || '');
    console.log(uid);
    this.proyectos = await this.proyects.getAllByUser(uid);
  }

  async deleteProyect(id: number) {
    if (confirm('Desea eliminar este proyecto?')) {
      this.proyects.deleteProyect(id);
      window.location.reload();
    }
  }
}
