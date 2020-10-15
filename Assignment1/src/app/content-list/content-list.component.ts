import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentArray: Content[];
  constructor() {
    this.contentArray = [{
     id: 0,
      author: 'ghoul',
      imagUrl: 'string',
      type: 'string',
      title: 'string',
      body: 'string',
      tags: ['string']
    }, {
      id: 1,
      author: 'ghoul',
      imagUrl: 'string',
      type: 'string',
      title: 'string',
      body: 'string',
      tags: ['string']
    }, {
      id: 2,
      author: 'ghoul',
      imagUrl: 'string',
      type: 'string',
      title: 'string',
      body: 'string',
      tags: ['string']
    }, {
      id: 3,
      author: 'ghoul',
      imagUrl: 'string',
      type: 'string',
      title: 'string',
      body: 'string',
      tags: ['string']
    }, {
      id: 4,
      author: 'ghoul',
      imagUrl: 'string',
      type: 'string',
      title: 'string',
      body: 'string',
      tags: ['string']
    }];
  }

  ngOnInit(): void {
  }

}
