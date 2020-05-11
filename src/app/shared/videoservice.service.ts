import { Injectable } from '@angular/core';
import { Video } from './video.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class VideoserviceService {
  formVideo : Video
  constructor(private firestore: AngularFirestore, private afs: AngularFireStorage) { }

}
