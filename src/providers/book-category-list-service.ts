import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { AngularFire } from 'angularfire2';


@Injectable()
export class BookCategoryListService {

  constructor(private af: AngularFire) {
    console.log('Hello BookCategoryListService Provider');
  }

  getBookCategories(bookId){
    return this.af.database.list('/books/'+bookId+"/categories")
  }

}
