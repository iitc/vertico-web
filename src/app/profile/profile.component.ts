import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { VerticofactoryService } from './../vertico/v1/services/verticofactory.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  profile: any;
  verticoUser: any;
  constructor(public auth: AuthService, private verticofactoryService: VerticofactoryService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      const vp = this.verticofactoryService.getUserProfile(this.profile.email);
      vp.subscribe(data => {
        this.verticoUser = data.json()[0];
       },
        err => {
          console.log(err);
        })
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        const vp = this.verticofactoryService.getUserProfile(this.profile.email);
        vp.subscribe(data => {
          this.verticoUser = data.json()[0];
        },
          err => {
            console.log(err);
          })
      });
    }
  }
}
