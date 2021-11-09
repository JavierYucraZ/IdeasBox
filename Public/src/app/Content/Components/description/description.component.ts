import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectsService } from '../../Services/proyects.service';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  autor: string;
  id: number;
  dataItem: any;
  width: number;
  bgColor: string;

  constructor(
    private userService: UsersService,
    private proyects: ProyectsService,
    private route: ActivatedRoute
  ) {
    this.autor = '';
    this.id = 0;
    this.dataItem = {};
    this.width = 0;
    this.bgColor = '#F87590';
  }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataItem = (await this.proyects.getOneByID(this.id)) || {};
    const user = this.userService.getUserByUid(this.dataItem.uid);
    user.then((doc: any) => {
      if (doc.exists) {
        this.autor = doc.data().user;
      }
    });
    this.calcWidth();
  }

  calcWidth() {
    this.width = (this.dataItem.recaudado * 100) / this.dataItem.meta;
    if (this.width > 100) {
      this.width = 100;
    }
    if (this.width < 40) {
      this.bgColor = '#F87590';
    } else if (this.width > 40 && this.width < 75) {
      this.bgColor = '#DEE97A';
    } else if (this.width > 75) {
      this.bgColor = '#34FC2C';
    }
  }
}
