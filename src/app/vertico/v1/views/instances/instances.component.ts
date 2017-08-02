import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../auth/auth.service';
import { VerticofactoryService } from './../../services/verticofactory.service';
@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.css'],
  providers: [VerticofactoryService]
})
export class InstancesComponent implements OnInit {

  constructor(public auth: AuthService, private verticofactoryService: VerticofactoryService) { }
  userInstances: any
  ngOnInit() {
    this.verticofactoryService.getUserProfile(localStorage.getItem('email')).subscribe(
      data => {
        this.verticofactoryService.getInstances(data.json()[0].id).subscribe(
          data => {
            this.userInstances = data.json();
          },
          err => {
            console.log(err);
          }
        )

      },
      err => {

      }
    );



  }
}

