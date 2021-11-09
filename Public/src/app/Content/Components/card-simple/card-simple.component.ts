import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.css'],
})
export class CardSimpleComponent implements OnInit {
  @Input() dataItem: any;

  constructor() {}

  ngOnInit(): void {}
}
