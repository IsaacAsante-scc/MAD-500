import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Output() newBookEvent = new EventEmitter<Content>();
  newBook: any;

  constructor(private contentService: ContentService) {
    this.newBook = {
      author: '',
      imgUrl: '',
      type: '',
      title: '',
      body: '',
      tags: ['']
    };
  }

  ngOnInit(): void {
  }

  addBook(): void{
    this.contentService.addBook(this.newBook).subscribe(theActualBook => {
      this.newBookEvent.emit(theActualBook);
      console.log('The book title added: ', this.newBook.title);

      this.newBook = {
        id: this.newBook.id + 1,
        author: '',
        imgUrl: '',
        title: '',
        tags: [''],
        type: '',
        body: ''
      };
    });
  }

  clearInput(): void{
    this.newBook.id = 0;
    this.newBook.author = '';
    this.newBook.imgUrl = '';
    this.newBook.type = '';
    this.newBook.title = '';
    this.newBook.body = '';
    this.newBook.tags = [''];
  }
}
