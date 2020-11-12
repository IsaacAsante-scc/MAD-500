import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newBookEvent = new EventEmitter<Content>();
  newBook: Content;

  constructor() {
    this.newBook = {
      id: 0,
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
    this.newBookEvent.emit(this.newBook);

    const promiseAddBook = new Promise((success, fail) => {
      if (this.newBook.author.length && this.newBook.title.length && this.newBook.body.length) {
        success(console.log('Addition Is Successful', this.newBook.title));
      }
      else {
        fail(console.log('Addition Has Failed', this.newBook.title));
      }
    });

    promiseAddBook.then(successResult =>
      successResult)
      .catch(failResult => failResult);
    this.newBook.id = + this.newBook.id;
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
