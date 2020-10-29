import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  books: Content[];
  searchResult: string;
  @Input() item: Content;
  constructor() {
    this.books = [];
    this.books = [{
     id: 0,
      author: 'Isaac',
      imgUrl: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
      type: 'Non-Fiction',
      title: 'book 1',
      body: 'body',
      tags: ['string', 'sadas', 'adsds']
    }, {
      id: 1,
      author: 'A',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg',
      type: 'Fiction',
      title: 'book 2',
      body: 'body',
      tags: ['string']
    }, {
      id: 2,
      author: 'B',
      imgUrl: '',
      type: 'Fiction',
      title: 'book 3',
      body: 'body',
      tags: ['string']
    }, {
      id: 3,
      author: 'C',
      imgUrl: '',
      type: '',
      title: 'book 4',
      body: 'body',
      tags: ['string', 'ghkhh', ',jnjnl']
    }, {
      id: 4,
      author: 'D',
      imgUrl: '',
      type: 'Non-Fiction',
      title: 'book 4',
      body: 'body',
      tags: ['string']
    }];
    this.searchResult = 'No search';
  }

  ngOnInit(): void {
  }

  searchForTitle(title: string): void {

    if (this.books.filter(b => b.title === title).length > 0) {
      this.searchResult = 'Book Was Found';
      return;
    }
    this.searchResult = 'Game Not Found';
  }

}


