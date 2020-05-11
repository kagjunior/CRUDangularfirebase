import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

}
