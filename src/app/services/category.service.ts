import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryCollection:AngularFirestoreCollection<Category>;
  constructor(private fireStore: AngularFirestore) {

    this.categoryCollection = this.fireStore.collection<Category>('Categories');

  }

  getCategories(){
    return this.fireStore.collection('Categories').snapshotChanges();
  }

  addCategory(category:Category){
    
    

    return this.fireStore.collection('Categories').add({...category});
    
  }

}
