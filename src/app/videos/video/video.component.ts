import { Component, OnInit } from '@angular/core';
import { VideoserviceService } from 'src/app/shared/videoservice.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
 ref: AngularFireStorageReference
 task: AngularFireUploadTask
   constructor(public service: VideoserviceService, private firestore: AngularFirestore, private db: AngularFireDatabase, private afs: AngularFireStorage) {} 


  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formVideo = {
      id: null,
      title: '',
      description: '',
      image: ''
    }
  }
  onSubmit(form: NgForm){
    if (form.value.title !== null || form.value.description !== null){
      let data = form.value;
      this.db.list('videos').push(data); 
      this.resetForm(form);
    } else {

    }
  }
  load(event){
    const id =  Math.random().toString().substring(2);
    this.ref = this.afs.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    
  }
  
}
