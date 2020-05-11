import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { VideoComponent } from './videos/video/video.component';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { VideoserviceService } from './shared/videoservice.service';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers: [VideoserviceService, {provide: BUCKET, useValue: "angular-50616.appspot.com}"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
