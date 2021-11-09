import { Component, OnInit } from '@angular/core';
import { ProyectsService } from '../../Services/proyects.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  outstanding: any;
  constructor(private proyects: ProyectsService) {
    this.outstanding = [{}, {}, {}, {}, {}];
  }

  async ngOnInit() {
    this.outstanding = await this.proyects.getBests();
  }
}
