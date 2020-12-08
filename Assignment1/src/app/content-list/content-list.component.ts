import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  books: Content[];
  searchResult: string;
  @Input() item: Content;
  constructor(private contentService: ContentService) {
    this.searchResult = 'No search';
  }

  ngOnInit(): void {
    this.contentService.getBookObs().subscribe(bl => {
      this.books = bl;
    });
  }

  searchForTitle(title: string): void {

    if (this.books.filter(b => b.title === title).length > 0) {
      this.searchResult = 'Book Was Found';
      return;
    }
    this.searchResult = 'Game Not Found';
  }

  addBookToList(newBook: Content): void {
    this.books.push(newBook);
    this.books = Object.assign([], this.books);
  }
}


