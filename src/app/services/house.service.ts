import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { House } from '../interfaces/house';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  public items: Observable<House []>;
  private houseCollection: AngularFirestoreCollection<House>;

  constructor(private afs: AngularFirestore) {
    this.houseCollection = this.afs.collection<House>('houses');
  }

  async findNameHouse(reference: firestore.DocumentReference) {
    return await reference.get()
      .then(doc => doc.data().name);
  }
}
