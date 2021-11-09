import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private firestore: AngularFirestore) {}

  async getUserByUid(uid: string) {
    return this.firestore.collection('users').doc(uid).get().toPromise();
  }
}
