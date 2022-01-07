import { Injectable } from '@angular/core';
import { query } from 'firebase/database';
import { addDoc, collection, doc, getDocs, getFirestore, updateDoc, where } from 'firebase/firestore';
import { filter, map, of, switchMap } from 'rxjs';
import { Posting } from '../models/posting';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  private readonly collectionPath:string = "postings";
  private postingCollection = collection(getFirestore(),this.collectionPath);

  constructor() { }

  

  async getAll(){
    const getData = await getDocs(this.postingCollection);    
    return of(getData);    
    
  }

  
  async add(posting:Posting){
    const addOperation = await addDoc(this.postingCollection, {
      id:posting.id,
    title:posting.title,
    description:posting.description,
    phoneNumber:posting.phoneNumber,
    price:posting.price,
    squareMeter:posting.squareMeter,
    location:posting.location,
    image:posting.image
    });
    return of(addOperation);
  }


  async update(posting:Posting){
    const questionDocRef = doc(getFirestore(), this.collectionPath, posting.id == null ? posting.title : posting.id);
    const updateOperation = await updateDoc(questionDocRef,{
    title:posting.title,
    description:posting.description,
    phoneNumber:posting.phoneNumber,
    price:posting.price,
    squareMeter:posting.squareMeter,
    location:posting.location,
    image:posting.image
    });
    return of(updateOperation);
  }
}
