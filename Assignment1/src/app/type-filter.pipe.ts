import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(bookList: Content[], chosenType: string): Content[] {
    return bookList.filter(book => book.type && book.type === chosenType);
  }

}
