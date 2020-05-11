import { Component, OnInit } from '@angular/core';
import { VideoserviceService } from 'src/app/shared/videoservice.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Video } from 'src/app/shared/video.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Key } from 'protractor';
import { format } from 'path';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videos: Observable<any[]>;
  constructor(private service: VideoserviceService, private db: AngularFireDatabase) { 
    this.videos = this.db.list('videos').snapshotChanges().pipe(map(changes => 
      changes.map(c => ({key: c.payload.key, ...c.payload.val() as Video}))))
  }
  modifier(val: Video){
    this.service.formVideo = Object.assign({}, val);
  }
  supprimer(key){
    if(confirm('Vous êtes sur de vouloir supprimer ce video ?')){
    this.db.list('videos/').remove(key);
    }
  }



  ngOnInit() {
  }

}
