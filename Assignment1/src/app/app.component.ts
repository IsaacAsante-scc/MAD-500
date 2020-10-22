import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment1';
  itemContent: Content[];
  constructor() {
    this.itemContent = [{
      id: 0,
      author: 'ghoul',
      imgUrl: 'string',
      type: 'string',
      title: 'string',
      body: 'string',
      tags: ['string']
    }, {
      id: 1,
      author: 'ghoul',
      imgUrl: 'string',
      type: 'string',
      title: 'string',
      body: 'string',
      tags: ['string']
    }, {
      id: 2,
      author: 'ghoul',
      imgUrl: 'string',
      type: 'string',
      title: 'string',
      body: 'string',
      tags: ['string']
    }, {
      id: 3,
      author: 'ghoul',
      imgUrl: 'string',
      type: 'string',
      title: 'string',
      body: 'string',
      tags: ['string']
    }, {
      id: 4,
      author: 'ghoul',
      imgUrl: 'string',
      type: 'string',
      title: 'string',
      body: 'string',
      tags: ['string']
    }];
  }
}



export interface Content{
  readonly id: number;
  author: string;
  imgUrl?: string;
  type?: string;
  title: string;
  body: string;
  tags?: [string];
}

