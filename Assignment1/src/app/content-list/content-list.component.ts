import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../app.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentArray: Content[];
  @Input() item: Content;
  constructor() {
    this.contentArray = [{
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

  ngOnInit(): void {
    this.contentArray = [{
      id: 0,
      author: 'ghoul',
      imgUrl: 'string',
      type: 'string',
      title: 'string',
      body: 'string',
      tags: ['string']
    }];

  }

}


