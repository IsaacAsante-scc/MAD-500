import { Component, OnInit } from '@angular/core';
import {Content} from '../app.component';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  item: Content;
  constructor() { }

  ngOnInit(): void {
  }

}
