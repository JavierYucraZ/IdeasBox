import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.css'],
})
export class CardSimpleComponent implements OnInit {
  @Input() dataItem: {
    id: number;
    url: string;
    title: string;
    shortDescription: string;
  };

  constructor() {
    this.dataItem = { id: 0, url: '', title: '', shortDescription: '' };
  }

  ngOnInit(): void {}
}
