import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {BOOKS} from '../helper-files/contentDb';
import {Observable} from 'rxjs';
import {MessageService} from '../message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-type' : 'application/json'})
  };

  constructor(private messageService: MessageService, private http: HttpClient) {}
  getBooks(): Content[] {
    return BOOKS;
  }
  getBookObs(): Observable<Content[]>{
    this.messageService.add('Content retrieved!');
    return this.http.get<Content[]>('api/content');
  }

  addBook(book: Content): Observable<Content> {
    this.messageService.add('New Content Added ' + book.title);
    return this.http.post<Content>('api/content', book, this.httpOptions);
  }
}
