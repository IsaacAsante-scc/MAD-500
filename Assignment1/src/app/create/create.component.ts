import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Output() newBookEvent = new EventEmitter<Content>();
  newBook: any;

  constructor(private contentService: ContentService, private dialog: MatDialog) {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '600px',
      data: this.newBook
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog has closed');
      this.newBook = result;
      this.addBook();
    });
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

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
})
export class CreateDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Content) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
